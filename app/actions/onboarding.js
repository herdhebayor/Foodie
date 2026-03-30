'use server'

import connectDB from '@/database'
import User from '@/models/userModel'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addEmailAndPhone(formData) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser?.userId) {
    throw new Error('Unauthorized')
  }

  const phone = formData.get('phone')
  const address = formData.get('address')

  if (!phone || !address) {
    throw new Error('Phone and address are required')
  }

  // Update user
  await User.findByIdAndUpdate(
    sessionUser.userId,
    {
        $set:{
      phone,
      address,
      profileCompleted: true,
     }
    },
    { new: true }
  )

  // ✅ refresh layout/session UI
  revalidatePath('/')

  // ✅ redirect after success
  redirect('/')
}