import { NextResponse } from "next/server";
import { getCurrentUserOrders } from "@/lib/userService";
import { getCorsHeaders, corsOptionsResponse } from "@/utils/cors";

export async function GET() {
  try {
    const orders = await getCurrentUserOrders();

    return NextResponse.json(
      {
        success: true,
        orders,
      },
      { headers: getCorsHeaders() }
    );
  } catch (error) {
    const status = error.message === "Unauthorized" ? 401 : 500;

    return NextResponse.json(
      { success: false, error: error.message || "Unable to load orders" },
      { status, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
