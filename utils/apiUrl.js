const isBrowser = () => typeof window !== 'undefined' && window.location?.origin;

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

  // 1) Client-side: always resolve against the current origin so requests are
  //    same-origin (no CORS) and auth cookies are sent automatically. Never
  //    use a hardcoded localhost/domain base in the client bundle.
  if (isBrowser()) {
    return `${window.location.origin}/${apiPath}`;
  }

  // 2) Server-side: optionally use an explicit external API host when one is
  //    actually configured. A localhost base is never valid in production.
  const configuredBase = process.env.NEXT_PUBLIC_API_DOMAIN;
  if (configuredBase && !configuredBase.includes('localhost')) {
    const normalizedBase = configuredBase.replace(/\/+$|\s+/g, '');
    if (normalizedBase.endsWith('/api')) {
      return `${normalizedBase}/${normalizedPath.replace(/^api\/?/, '')}`;
    }
    return `${normalizedBase}/${apiPath}`;
  }

  // 3) Server-side (Server Components / Route Handlers): return a relative URL,
  //    which Next.js resolves against the same origin. Never falls back to
  //    localhost in production.
  return `/${apiPath}`;
}

