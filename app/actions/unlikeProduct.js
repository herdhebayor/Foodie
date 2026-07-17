'use server'

import connectDB from "@/database";
import LikedProduct from "@/models/likeProductModel";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function unlikedProduct(id) {
try{  await connectDB();

  const { userId } = await getSessionUser();
  
  if(!userId){
    return new Error('Unaothorize')
  }

  const product = await LikedProduct.findOneAndDelete({
    productId : id,
    user: userId,
  });

  if (!product) {
    return { success: false, error:"Can not find product"};
  }

  return { success: true }
}catch(err){
  console.error('Error unliking product:', err);
  return { success: false, error: err.message || 'An error occurred while unliking the product.' };
}
}