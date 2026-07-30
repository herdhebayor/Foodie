import { NextResponse } from 'next/server';
import { getCurrentUserOrderById } from '@/lib/userService';

export async function GET(request) {
  const orderId = request.nextUrl.searchParams.get('orderId');

  if (!orderId) {
    return NextResponse.json(
      { success: false, error: 'orderId is required' },
      { status: 400 }
    );
  }

  try {
    const order = await getCurrentUserOrderById(orderId);
    return NextResponse.json({ success: true, order });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load order' },
      { status: 500 }
    );
  }
}
