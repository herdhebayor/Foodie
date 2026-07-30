"use server";

import connectDB from "@/database";
import User from "@/models/userModel";
import { getSessionUser } from "@/utils/getSessionUser";
import Booking from "@/models/bookingModels";

export async function completeBooking(formData) {
  await connectDB();

  const session = await getSessionUser();
  if (!session?.userId) {
    return { success: false, error: "User not logged in" };
  }

  const dbUser = await User.findById(session.userId).lean();
  if (!dbUser) {
    return { success: false, error: "User not found" };
  }

  const date = formData.get('date');
  const time = formData.get('time');
  const seatNumber = Number(formData.get('person'));
  const data = {
    user: dbUser._id,
    name: formData.get('name'),
    seatNumber,
    email: formData.get('email'),
    phone: formData.get('phone'),
    time,
    date,
  };

  const isExist = await Booking.findOne({ date, time }).lean();
  if (isExist) {
    return { success: false, error: 'There has been a table booked for this period' };
  }

  await Booking.create(data);

  // Create an unread notification message for the successful booking
    await (await import("@/app/actions/sendOrderPlacedNotification")).sendOrderPlacedNotification({
      body: `Your booking for ${seatNumber} people on ${date} at ${time} has been successfully placed. We look forward to serving you!`,
      messageId:null,
      messageType:'service',
    });

  return {
    success: true,
    message: "Your booking has been submitted successfully",
  };
}
