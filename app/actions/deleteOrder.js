'use server'

import connectDB from "@/database";
import Order from "@/models/orderModel";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function deleteOrder(orderId) {
  await connectDB();

  const { userId } = await getSessionUser();
  
  if(!userId){
    throw new Error('Unaothorize')
    return;
  }

  const order = await Order.findOneAndDelete({
    _id: orderId,
    user: userId,
  });

  if (!order) {
    return { success: false, error: "Order not found" };
  }

  return { success: true, message: "Order deleted successfully" }
}