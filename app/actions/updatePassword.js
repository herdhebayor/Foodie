'use server'

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";
import bcrypt from "bcryptjs";

export async function updatePassword(formData) {
  try {
    await connectDB();

    const session = await getSessionUser();
    const userId = session?.userId;

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }

    const oldPassword = formData.get("oldPassword") ?? "";
    const newPassword = formData.get("newPassword") ?? "";
    const rePassword = formData.get("rePassword") ?? "";

    if (!oldPassword || !newPassword || !rePassword) {
      return { success: false, error: "All fields are required" };
    }

    if (newPassword !== rePassword) {
      return { success: false, error: "New passwords do not match" };
    }

    const user = await User.findById(userId);
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password || "");
    if (!isMatch) {
      return { success: false, error: "Old password is incorrect" };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Couldn't complete your request, please try again later",
    };
  }
}

