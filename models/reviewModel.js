import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    productId: {
      type: String,
      required: true,
    },
    reviewComment: {
      type: String,
    },
    rating: {
      type: String,
      required: true,
    }, 
  },
  {
    timestamps: true,
  },
);

const Review = models.Review || model("Review", ReviewSchema);
export default Review;
