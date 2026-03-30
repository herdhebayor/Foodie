import { NextResponse } from "next/server";
import getOrders from "@/app/actions/getUserOrders";

export async function GET() {
  try {
    const orders = await getOrders();

    return NextResponse.json({
      success: true,
      orders,
    });

  } catch (error) {
    console.error("Orders API error:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}