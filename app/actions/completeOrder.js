'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Order from "@/models/orderModel";
import { redirect } from "next/navigation";



export async function completeOrder(formData) {
  try {
    await connectDB();

    const { userId } = await getSessionUser();

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }

    const name = formData.get("receiver");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");

    const cartDataStr = formData.get("cartData");

    if (!cartDataStr) {
      return { success: false, error: "Cart data missing" };
    }

    const rawCartItems = JSON.parse(cartDataStr);

    const items = rawCartItems.map((item) => ({
      name: item.name,
      image: item.image,
      quantity: item.quantity || 1,
      purchasePrice: item.totalPrice || item.price,
      price: item.price,
      extras: item.extras || [],
    }));

    const orderData = {
      user: userId,
      items,
      receiver: name,
      email,
      phone,
      deliveryAddress: address,
      subtotal: Number(formData.get("subtotal") || 0),
      tax: Number(formData.get("tax") || 0),
      discount: Number(formData.get("discount") || 0),
      deliveryFee: Number(formData.get("deliveryFee") || 0),
      totalAmount: Number(formData.get("totalAmount") || 0),
      deliveryTime: formData.get("deliveryTime"),
      status: "pending",
    };

    const newOrder = await Order.create(orderData);

    // ✅ RETURN PLAIN OBJECT ONLY
    return {
      success: true,
      message: "Order placed successfully!",
      orderId: newOrder._id.toString(),
    };
     
  } catch (error) {
    console.error("Order error:", error);

    return {
      success: false,
      error: "Failed to place order",
    };
  }
}