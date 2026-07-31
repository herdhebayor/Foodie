import { NextResponse } from 'next/server';
import { getCurrentUserLikedProducts } from '@/lib/userService';
import { getCorsHeaders, corsOptionsResponse } from '@/utils/cors';

export async function GET() {
  try {
    const likedProducts = await getCurrentUserLikedProducts();
    return NextResponse.json({ success: true, likedProducts }, { headers: getCorsHeaders() });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load liked products' },
      { status, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
