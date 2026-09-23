import { createHash } from 'node:crypto';
import { getCache } from '@vercel/functions';

const cache = getCache({ namespace: 'selection-speech' });
const voiceTtlMs = 60 * 60 * 1000;
const maxTextLength = 500;
const maxRequestsPerHour = 12;
let voiceSnapshot = null;

const json = (response, status, body) => {
  response.status(status);
  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.setHeader('cache-control', 'no-store');
  response.end(JSON.stringify(body));
};

const readBody = (request) => {
  if (typeof request.body === 'object' && request.body !== null) return request.body;
  if (typeof request.body !== 'string' || request.body.length > 3000) return null;
  try {
    return JSON.parse(request.body);
  } catch {
    return null;
  }
};

const loadVoices = async (apiKey) => {
  if (voiceSnapshot && Date.now() - voiceSnapshot.at < voiceTtlMs) return voiceSnapshot.voices;

  const upstream = await fetch('https://api.elevenlabs.io/v2/voices?page_size=100', {
    headers: { 'xi-api-key': apiKey },
    signal: AbortSignal.timeout(10_000),
  });
  if (!upstream.ok) throw new Error(`Voice list failed: ${upstream.status}`);

  const payload = await upstream.json();
  const voices = (Array.isArray(payload.voices) ? payload.voices : [])
    .filter((voice) => /^[A-Za-z0-9]{20}$/.test(voice.voice_id) && typeof voice.name === 'string')
    .map((voice) => ({
      id: voice.voice_id,
      name: voice.name.slice(0, 80),
      languages: [
        ...(voice.verified_languages ?? []).map((item) => item.language),
        voice.labels?.language,
      ].filter((item) => typeof item === 'string'),
    }));
  if (voices.length === 0) throw new Error('No usable voices');
  voiceSnapshot = { at: Date.now(), voices };
  return voices;
};

const sameOrigin = (request) => {
  const origin = request.headers?.origin;
  const host = request.headers?.['x-forwarded-host'] ?? request.headers?.host;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

const consumeRateLimit = async (request, apiKey) => {
  const ip = String(request.headers?.['x-forwarded-for'] ?? request.headers?.['x-real-ip'] ?? 'unknown')
    .split(',')[0].trim();
  const bucket = Math.floor(Date.now() / 3_600_000);
  const key = createHash('sha256').update(`${apiKey}:${ip}:${bucket}`).digest('hex');
  const count = Number(await cache.get(key)) || 0;
  if (count >= maxRequestsPerHour) return false;
  await cache.set(key, count + 1, { name: 'Speech requests per hour', ttl: 3600 });
  return true;
};

export default async function handler(request, response) {
  response.setHeader('x-content-type-options', 'nosniff');
  if (request.method !== 'GET' && request.method !== 'POST') {
    response.setHeader('allow', 'GET, POST');
    json(response, 405, { error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    json(response, 503, { error: 'ElevenLabs is not configured' });
    return;
  }

  if (request.method === 'GET') {
    try {
      json(response, 200, { voices: await loadVoices(apiKey), maxTextLength });
    } catch {
      json(response, 503, { error: 'Voices are unavailable' });
    }
    return;
  }

  if (!sameOrigin(request)) {
    json(response, 403, { error: 'Invalid origin' });
    return;
  }

  const body = readBody(request);
  const text = typeof body?.text === 'string' ? body.text.replace(/\s+/g, ' ').trim() : '';
  const voiceId = body?.voiceId;
  if (text.length < 2 || text.length > maxTextLength || !/^[A-Za-z0-9]{20}$/.test(voiceId ?? '')) {
    json(response, 400, { error: `Select 2–${maxTextLength} characters and a valid voice` });
    return;
  }

  try {
    const voices = await loadVoices(apiKey);
    if (!voices.some((voice) => voice.id === voiceId)) {
      json(response, 400, { error: 'Voice is unavailable' });
      return;
    }
    if (!await consumeRateLimit(request, apiKey)) {
      json(response, 429, { error: 'Speech request limit reached; try again later' });
      return;
    }

    const upstream = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'xi-api-key': apiKey },
        body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2' }),
        signal: AbortSignal.timeout(20_000),
      },
    );
    if (!upstream.ok) {
      json(response, upstream.status === 429 ? 429 : 503, { error: 'ElevenLabs speech is unavailable' });
      return;
    }

    const audio = Buffer.from(await upstream.arrayBuffer());
    response.status(200);
    response.setHeader('content-type', 'audio/mpeg');
    response.setHeader('cache-control', 'no-store');
    response.end(audio);
  } catch {
    json(response, 503, { error: 'ElevenLabs speech is unavailable' });
  }
}
