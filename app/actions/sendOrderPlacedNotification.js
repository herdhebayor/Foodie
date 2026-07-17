'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/messageModel";

export async function sendOrderPlacedNotification({ body, orderId }) {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser?.userId) {
    throw new Error("You've been logged out, log in to continue");
  }

  await Message.create({
    user: sessionUser.userId,
    body: body || "Your order has been placed! View it in your orders.",
    orderId,
    messageType:'order',
    read: false,
  });

  return { success: true };
}

export default sendOrderPlacedNotification;

