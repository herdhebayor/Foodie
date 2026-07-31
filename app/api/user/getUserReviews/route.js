import { NextResponse } from "next/server";
import { getUserReview } from "@/lib/userService";

export async function GET() {
  try {
    const reviews = await getUserReview();
    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    const status = error.message === 'Unauthorized' ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message || "Unable to load reviews" },
      { status },
    );
  }
}
