"use server";

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";
import Review from "@/models/reviewModel";

export async function reviewProduct({ id, comment, rating }) {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    return { success: false, error: "User not logged in" };
  }

  const dbUser = await User.findById(session.userId).lean();
  if (!dbUser) {
    return { success: false, error: "User not found" };
  }

  const reviewData = {
    user: dbUser._id,
    productId: id,
    reviewComment: comment,
    rating: String(rating),
  };

  await Review.create(reviewData);

  return {
    success: true,
    message: 'Your review has been submitted successfully',
  };
}
