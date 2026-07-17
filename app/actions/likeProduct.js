'use server'

import connectDB from "@/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Product from "@/models/productModel";
import LikedProduct from "@/models/likeProductModel";
import { data } from "@/foodie_products";


export async function likedProduct (productId) {

  try{
    await connectDB();

    const { userId } = await getSessionUser();

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }
    const product = data.products.find(product => product.id === productId)

    if(!product) {
        return { success: false, error: "Product not found" };
    }

    const likedData = {
        user:userId,
        productId:product.id,
        name:product.name,
        image:product.images[0],
        basePrice: product.pricing.finalPrice
    }

    await LikedProduct.create(likedData);
    return {
      success: true,
    }
  }catch(err){
    console.error('Error liking product:', err);
    return { success: false, error: err.message || 'An error occurred while liking the product.' };
  }
}