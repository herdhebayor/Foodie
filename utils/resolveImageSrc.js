export function resolveImageSrc(imageValue, fallback = '/images/chicken_burger.jpg') {
  if (typeof imageValue !== 'string' || !imageValue.trim()) {
    return fallback;
  }

  const value = imageValue.trim();

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  if (value.startsWith('/images/')) {
    return value;
  }

  if (value.startsWith('images/')) {
    return `/${value}`;
  }

  if (value.startsWith('/')) {
    return fallback;
  }

  if (value.includes('/')) {
    return fallback;
  }

  return `/images/${value}`;
}
