import { createHash } from 'node:crypto';
import { getCache } from '@vercel/functions';

const rateCache = getCache({ namespace: 'selection-speech-rate' });
const audioCache = getCache({ namespace: 'selection-speech-audio' });
const maxTextLength = 500;
const maxRequestsPerHour = 12;
const audioCacheTtl = 24 * 60 * 60;
const maxCacheableAudioBytes = 750_000;
// George is an ElevenLabs premade voice; the multilingual model reads both languages.
const voiceId = 'JBFqnCBsd6RMkjVDRZzb';
const modelId = 'eleven_multilingual_v2';

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
  const count = Number(await rateCache.get(key)) || 0;
  if (count >= maxRequestsPerHour) return false;
  await rateCache.set(key, count + 1, { name: 'Speech requests per hour', ttl: 3600 });
  return true;
};

const sendAudio = (response, audio, cacheState) => {
  response.status(200);
  response.setHeader('content-type', 'audio/mpeg');
  response.setHeader('cache-control', 'no-store');
  response.setHeader('x-speech-cache', cacheState);
  response.end(audio);
};

export default async function handler(request, response) {
  response.setHeader('x-content-type-options', 'nosniff');
  if (request.method !== 'POST') {
    response.setHeader('allow', 'POST');
    json(response, 405, { error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    json(response, 503, { error: 'ElevenLabs is not configured' });
    return;
  }

  if (!sameOrigin(request)) {
    json(response, 403, { error: 'Invalid origin' });
    return;
  }

  const body = readBody(request);
  const text = typeof body?.text === 'string' ? body.text.replace(/\s+/g, ' ').trim() : '';
  if (text.length < 2 || text.length > maxTextLength) {
    json(response, 400, { error: `Select 2–${maxTextLength} characters` });
    return;
  }

  try {
    const audioKey = createHash('sha256').update(JSON.stringify([voiceId, modelId, text])).digest('hex');
    const cachedAudio = await audioCache.get(audioKey);
    if (typeof cachedAudio === 'string') {
      sendAudio(response, Buffer.from(cachedAudio, 'base64'), 'hit');
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
        body: JSON.stringify({ text, model_id: modelId }),
        signal: AbortSignal.timeout(20_000),
      },
    );
    if (!upstream.ok) {
      json(response, upstream.status === 429 ? 429 : 503, { error: 'ElevenLabs speech is unavailable' });
      return;
    }

    const audio = Buffer.from(await upstream.arrayBuffer());
    if (audio.length <= maxCacheableAudioBytes) {
      await audioCache.set(audioKey, audio.toString('base64'), { name: '', ttl: audioCacheTtl });
    }
    sendAudio(response, audio, 'miss');
  } catch {
    json(response, 503, { error: 'ElevenLabs speech is unavailable' });
  }
}
