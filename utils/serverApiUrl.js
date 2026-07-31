import { headers } from 'next/headers';

/**
 * Server-only helper that builds an absolute URL to the app's own API routes.
 *
 * Server Components cannot call their own API routes with a relative URL
 * (Node's fetch requires an absolute URL). Deriving the origin from the
 * incoming request's forwarded headers means no hardcoded domain is needed:
 *   - Local dev:    http://localhost:3000/api/...
 *   - Vercel prod:  https://<deployment-domain>/api/...
 *
 * This module must only be imported from Server Components / Route Handlers,
 * never from client components.
 */
export async function getServerApiUrl(path = '') {
  if (typeof path !== 'string') {
    throw new Error('API path must be a string');
  }

  // Allow callers to pass an absolute URL directly.
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, '');
  const apiPath = normalizedPath.startsWith('api/')
    ? normalizedPath
    : `api/${normalizedPath}`;

  const headersList = await headers();
  const proto = headersList.get('x-forwarded-proto') || 'http';
  const host =
    headersList.get('x-forwarded-host') ||
    headersList.get('host') ||
    'localhost:3000';
  const origin = `${proto}://${host}`;

  return `${origin}/${apiPath}`;
}

