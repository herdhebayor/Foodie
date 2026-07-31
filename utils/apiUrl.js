export function getApiUrl(path = '') {
  if (typeof path !== 'string') {
    throw new Error('API path must be a string');
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN 

  const normalizedBase = baseUrl.replace(/\/+$|\s+/g, '');
  const normalizedPath = path.replace(/^\/+/, '');

  if (normalizedBase.endsWith('/api')) {
    return `${normalizedBase}/${normalizedPath.replace(/^api\/?/, '')}`;
  }

  return `${normalizedBase}/${normalizedPath}`;
}
