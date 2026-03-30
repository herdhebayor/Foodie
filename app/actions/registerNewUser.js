'use server'

import bcrypt from "bcryptjs";
import connectDB from "@/database";
import User from "@/models/userModel";

export async function registerUser(formData) {
  await connectDB();

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    throw new Error("All fields required");
  }

  // check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
    provider: "credentials",
    profileCompleted: false,
  });

  return { success: true };
}