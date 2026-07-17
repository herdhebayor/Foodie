'use server'

import connectDB from "@/database";
import LikedProduct from "@/models/likeProductModel";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function getUserLikedProduct() {
  await connectDB();

  const { userId } = await getSessionUser();
  
  if(!userId){
    return new Error('Unaothorize')
  }

  const likedProducts = await LikedProduct.find({
        user: userId,
    }).sort({
        createdAt: -1
    });

    return JSON.parse(JSON.stringify(likedProducts));
}