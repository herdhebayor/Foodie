'use server'

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";
import { sendUserAction } from '@/app/actions/sendUserActions';

export default async function deleteUser(userId, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser?.userId) {
    return { success: false, error: 'Unauthorized' };
  }

  if (sessionUser.userId !== userId) {
    return { success: false, error: 'Unauthorized' };
  }

  const deleted = await User.findByIdAndDelete(userId);

  if (!deleted) {
    return { success: false, error: 'User not found' };
  }

  if (formData) {
    await sendUserAction(formData);
  }

  return { success: true, message: 'User deleted successfully' };
}

