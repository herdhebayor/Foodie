import { NextResponse } from "next/server";
import { getUserReview } from "@/lib/userService";
import { getCorsHeaders, corsOptionsResponse } from "@/utils/cors";

export async function GET() {
  try {
    const reviews = await getUserReview();
    return NextResponse.json({ success: true, reviews }, { headers: getCorsHeaders() });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || "Unable to load reviews" },
      { status, headers: getCorsHeaders() },
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
