import { NextResponse } from "next/server";
import getOrders from "@/app/actions/getUserOrders";
import { toast } from "react-toastify";
import { getCorsHeaders, corsOptionsResponse } from "@/utils/cors";

export async function GET() {
  try {
    const orders = await getOrders();

    return NextResponse.json(
      {
        success: true,
        orders,
      },
      { headers: getCorsHeaders() }
    );

  } catch (error) {
    toast.error("Orders API error:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: getCorsHeaders() }
    );
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
