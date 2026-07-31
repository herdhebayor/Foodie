import { NextResponse } from 'next/server';
import { getCurrentUserOrderById } from '@/lib/userService';
import { getCorsHeaders, corsOptionsResponse } from '@/utils/cors';

export async function GET(request) {
  const orderId = request.nextUrl.searchParams.get('orderId');

  if (!orderId) {
    return NextResponse.json(
      { success: false, error: 'orderId is required' },
      { status: 400, headers: getCorsHeaders() }
    );
  }

  try {
    const order = await getCurrentUserOrderById(orderId);
    return NextResponse.json({ success: true, order }, { headers: getCorsHeaders() });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load order' },
      { status: 500, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
