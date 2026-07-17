'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Product from "@/models/productModel";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";



export async function completeOrder(formData,productId) {
  try {
    await connectDB();

    const { userId } = await getSessionUser();

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }

    const comment = formData.get("comment");
    const rating = formData.get("rating");

    if(!comment && !rating){
        return{success:false, error:'All input must be filled'}
    }

    const reviewData = {
      user: userId,
      comment,
      rating,
    };

    const product = Product.findByIdAndUpdate(productId,{
        reviews:[...reviewData]
    }).lean()
    

    return {
      success: true,
      product: product
    };
  } catch (error) {
    console.error("Error completing your request please try again:", error);

    return {
      success: false,
      error: "Failed to submit review",
    };
  }
}