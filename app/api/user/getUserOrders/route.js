import { NextResponse } from 'next/server';
import { getCurrentUserOrders } from '@/lib/userService';

export async function GET() {
  try {
    const orders = await getCurrentUserOrders();
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load orders' },
      { status: 500 }
    );
  }
}
