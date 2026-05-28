import { getCache } from '@vercel/functions';

const cache = getCache({ namespace: 'konh-overlay' });
const positionKey = 'position';

const json = (response, status, body) => {
  response.status(status);
  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.setHeader('cache-control', 'no-store');
  response.end(JSON.stringify(body));
};

const toFiniteNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const readBody = (request) => {
  if (typeof request.body === 'object' && request.body !== null) return request.body;
  if (typeof request.body !== 'string') return {};

  try {
    return JSON.parse(request.body);
  } catch {
    return {};
  }
};

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('allow', 'GET, POST');
    response.status(204).end();
    return;
  }

  if (request.method === 'GET') {
    const position = await cache.get(positionKey);
    json(response, 200, { position: position ?? null });
    return;
  }

  if (request.method !== 'POST') {
    response.setHeader('allow', 'GET, POST');
    json(response, 405, { error: 'Method not allowed' });
    return;
  }

  const body = readBody(request);
  const x = toFiniteNumber(body.x);
  const y = toFiniteNumber(body.y);
  const clientId = typeof body.clientId === 'string' ? body.clientId.slice(0, 80) : 'anonymous';

  if (x === null || y === null) {
    json(response, 400, { error: 'Invalid position' });
    return;
  }

  const position = {
    x: clamp(x, 0, 1),
    y: clamp(y, 0, 1),
    clientId,
    updatedAt: Date.now(),
  };

  await cache.set(positionKey, position, {
    name: 'Konh overlay position',
    ttl: 60 * 60 * 24 * 30,
  });

  json(response, 200, { position });
}
