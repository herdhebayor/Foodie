import { NextResponse } from 'next/server';

/**
 * Origins allowed to call these API routes.
 * The primary fix makes all requests same-origin, so these headers are a
 * defensive measure only. Add any custom/preview domains here as needed.
 */
const ALLOWED_ORIGINS = [
  "https://foodie-ruddy-seven.vercel.app/",
  "http://localhost:3000",
];

export function getCorsHeaders(request) {
  const origin = request?.headers?.get('origin');
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
    'Vary': 'Origin',
  };
}

export function corsOptionsResponse() {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(),
  });
}

