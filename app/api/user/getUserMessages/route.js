import { NextResponse } from 'next/server';
import { getCurrentUserMessages } from '@/lib/userService';
import { getCorsHeaders, corsOptionsResponse } from '@/utils/cors';

export async function GET() {
  try {
    const messages = await getCurrentUserMessages();
    return NextResponse.json({ success: true, messages }, { headers: getCorsHeaders() });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load messages' },
      { status, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
