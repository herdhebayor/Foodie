'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/messageModel";

export async function markMessagesRead() {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser?.userId) {
    throw new Error("You've been logged out, log in to continue");
  }

  await Message.updateMany(
    { user: sessionUser.userId, read: false },
    { $set: { read: true } }
  );

  return { success: true };
}

export default markMessagesRead;

