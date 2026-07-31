'use server'

import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/userService';
import { getCorsHeaders, corsOptionsResponse } from '@/utils/cors';

export async function GET() {
  try {
    const user = await getCurrentUser();
    return NextResponse.json({ success: true, user }, { headers: getCorsHeaders() });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load user' },
      { status, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
