'use server'

import { getSessionUser } from '@/utils/getSessionUser'
import connectDB from '@/database'
import Order from '@/models/orderModel'

export async function getUserOrders() {
    await connectDB();

    const sessionUser = await getSessionUser()
    if(!sessionUser?.userId){
        throw new Error ("You've been logged out, log in to continue")
    }
    
    const userOrders = await Order.find({
        user: sessionUser?.userId,
    }).sort({
        createdAt: -1
    });

    return JSON.parse(JSON.stringify(userOrders));
  
}

export default getUserOrders
