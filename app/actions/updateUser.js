'use server'

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";

export async function updateUser(formData) {
  try {
    await connectDB();

    const session = await getSessionUser();

    if (!session?.userId) {
      return { success: false, error: "Unauthorized" };
    }

    const username = formData.get("username") ?? undefined;
    const email = formData.get("email") ?? undefined;
    const country = formData.get("country") ?? undefined;
    const state = formData.get("state") ?? undefined;
    const city = formData.get("city") ?? undefined;
    const street = formData.get("street") ?? undefined;
    const phone = formData.get("phone") ?? undefined;

    const addressParts = [street, city, state, country].filter(Boolean);
    const address = addressParts.join(", ");

    const updatedUser = await User.findByIdAndUpdate(
      session.userId,
      {
        username,
        email,
        phone,
        address,
      },
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    return { success: true, user: updatedUser };
  } catch (error) {
    return {
      success: false,
      error: "Couldn't complete your request, please try again later",
    };
  }
}

