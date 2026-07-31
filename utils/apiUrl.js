export function getApiUrl(path = '') {
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

  // 1) Explicitly configured API/domain base (e.g. an external API host).
  const configuredBase =
    process.env.NEXT_PUBLIC_API_DOMAIN ||
    process.env.NEXT_PUBLIC_DOMAIN ||
    process.env.NEXTAUTH_URL;

  if (configuredBase) {
    const normalizedBase = configuredBase.replace(/\/+$|\s+/g, '');
    if (normalizedBase.endsWith('/api')) {
      return `${normalizedBase}/${normalizedPath.replace(/^api\/?/, '')}`;
    }
    return `${normalizedBase}/${apiPath}`;
  }

  // 2) Client-side: resolve against the current origin so all requests are
  //    same-origin (no CORS) and auth cookies are sent automatically.
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}/${apiPath}`;
  }

  // 3) Server-side (Server Components / Route Handlers): return a relative URL,
  //    which Next.js resolves against the same origin. Never falls back to
  //    localhost in production.
  return `/${apiPath}`;
}

