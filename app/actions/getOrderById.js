'use server'

import connectDB from "@/database";
import Order from "@/models/orderModel";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function getOrderById(orderId) {
  await connectDB();

  const { userId } = await getSessionUser();

  const order = await Order.findOne({
    _id: orderId,
    user: userId, 
  }).lean();

  console.log(order)

  if (!order) return null;

  return JSON.parse(JSON.stringify(order));
}