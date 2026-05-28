import { getCache } from '@vercel/functions';

const cache = getCache({ namespace: 'konh-overlay' });
const positionKey = 'position';
const streamPollMs = 500;
const streamMaxMs = 55_000;
const heartbeatMs = 15_000;

export const config = {
  maxDuration: 60,
};

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
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isSseRequest = (request) => {
  const accept = request.headers?.accept ?? request.headers?.Accept ?? '';
  return String(accept).includes('text/event-stream');
};

const readBody = (request) => {
  if (typeof request.body === 'object' && request.body !== null) return request.body;
  if (typeof request.body !== 'string') return {};

  try {
    return JSON.parse(request.body);
  } catch {
    return {};
  }
};

const writeEvent = (response, event, data, id) => {
  if (id) response.write(`id: ${id}\n`);
  response.write(`event: ${event}\n`);
  response.write(`data: ${JSON.stringify(data)}\n\n`);
};

const streamPosition = async (request, response) => {
  response.writeHead(200, {
    'content-type': 'text/event-stream; charset=utf-8',
    'cache-control': 'no-cache, no-transform',
    connection: 'keep-alive',
    'x-accel-buffering': 'no',
  });
  response.flushHeaders?.();
  response.write('retry: 1000\n\n');

  let closed = false;
  let lastHeartbeatAt = Date.now();
  let lastUpdatedAt = Number(request.headers?.['last-event-id']) || 0;
  const startedAt = Date.now();

  request.on?.('close', () => {
    closed = true;
  });

  while (!closed && Date.now() - startedAt < streamMaxMs) {
    const position = await cache.get(positionKey);

    if (position && typeof position.updatedAt === 'number' && position.updatedAt > lastUpdatedAt) {
      lastUpdatedAt = position.updatedAt;
      writeEvent(response, 'position', position, String(position.updatedAt));
    }

    if (Date.now() - lastHeartbeatAt > heartbeatMs) {
      response.write(': keepalive\n\n');
      lastHeartbeatAt = Date.now();
    }

    await sleep(streamPollMs);
  }

  if (!closed) response.end();
};

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('allow', 'GET, POST');
    response.status(204).end();
    return;
  }

  if (request.method === 'GET') {
    if (isSseRequest(request)) {
      await streamPosition(request, response);
      return;
    }

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
