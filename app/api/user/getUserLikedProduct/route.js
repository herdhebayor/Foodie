import { NextResponse } from 'next/server';
import { getCurrentUserLikedProducts } from '@/lib/userService';

export async function GET() {
  try {
    const likedProducts = await getCurrentUserLikedProducts();
    return NextResponse.json({ success: true, likedProducts });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load liked products' },
      { status }
    );
  }
}
