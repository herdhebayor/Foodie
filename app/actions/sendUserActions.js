"use server";

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import userAction from '@/models/userActionModel';

export async function sendUserAction(formData) {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser?.userId) {
    throw new Error("Unauthorized, cannot find user");
  }

  const message = formData.get('message')
  const addText = formData.get('addText')
  await userAction.create({
    user: sessionUser?.userId,
    body: {
        message,
        additionalMessage :addText || ''
    },
    actionType: "account deletion"
  });

  return { success: true };
}

export default sendUserAction;
