'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/messageModel";

export async function deleteMessage(id) {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser?.userId) {
    throw new Error("You've been logged out, log in to continue");
  }

  const message = await Message.findById(id);
  if (!message) {
    return { success: false, error: "Message not found" };
  }

  // Only the message owner can delete the message
  if (String(message.user) !== String(sessionUser.userId)) {
    return { success: false, message: "Unauthorized" };
  }

  await Message.findByIdAndDelete(id);

  return { success: true, message: "Message deleted successfully" };
}

export default deleteMessage;

