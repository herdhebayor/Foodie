'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/messageModel";

export async function getUserMessages() {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser?.userId) {
    throw new Error("You've been logged out , log in to continue");
  }

  const messages = await Message.find({ user: sessionUser.userId })
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(messages));
}

export default getUserMessages;

