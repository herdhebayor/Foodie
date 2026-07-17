'use server'

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function deleteUser() {
  await connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const deleted = await User.findByIdAndDelete(userId);

  if (!deleted) {
    return { success: false, error: "User not found" };
  }

  return { success: true, message: "User deleted successfully" };
}

