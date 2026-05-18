import { next } from '@vercel/functions';

const REQUIRED_PASSWORD = 'konh';

function getBasicAuthPassword(authorization: string | null): string | null {
  const match = authorization?.match(/^Basic\s+(.+)$/i);
  if (!match) {
    return null;
  }

  try {
    const credentials = atob(match[1]);
    const separatorIndex = credentials.indexOf(':');
    return separatorIndex === -1 ? null : credentials.slice(separatorIndex + 1);
  } catch {
    return null;
  }
}

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': 'Basic realm="konh", charset="UTF-8"',
    },
  });
}

export default function middleware(request: Request) {
  const password = getBasicAuthPassword(request.headers.get('authorization'));

  if (password !== REQUIRED_PASSWORD) {
    return unauthorized();
  }

  return next();
}
