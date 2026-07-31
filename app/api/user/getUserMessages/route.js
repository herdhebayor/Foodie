import { NextResponse } from 'next/server';
import { getCurrentUserMessages } from '@/lib/userService';

export async function GET() {
  try {
    const messages = await getCurrentUserMessages();
    return NextResponse.json({ success: true, messages });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load messages' },
      { status }
    );
  }
}
