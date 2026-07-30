'use server'

import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/userService';

export async function GET() {
  try {
    const user = await getCurrentUser();
    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Unable to load user' },
      { status: 500 }
    );
  }
}
