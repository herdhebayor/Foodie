import { Schema,model, models } from "mongoose";

const LikedProductSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		require: true,
	},
	name:String,
    productId: String,
    basePrice: Number,
	image:String,
},
{
    timestamps:true,
}
)

const LikedProduct = models.LikedProduct || model("LikedProduct",LikedProductSchema)
export default LikedProduct