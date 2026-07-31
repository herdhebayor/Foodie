import { Schema, model, models } from "mongoose";

const userActionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    body: {
        message :{
            type:String,
            required: true
        },
        additionalMessage:{
            type: String,
        }

    },
    actionType: {
      type: String,
      required: true,
      default: "order",
    },
  },
  {
    timestamps: true,
  },
);

const UserAction = models.UserAction || model("UserAction", userActionSchema);
export default UserAction;
