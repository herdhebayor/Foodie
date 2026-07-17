import { Schema,model, models } from "mongoose";

const MessageSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		require: true,
	},
	body:{
		type:String
	},
	orderId:{
		type: Schema.Types.ObjectId
	},
	messageType:{
		type:String,
		required:true,
		default:'order'
	},
    read:{
        type:Boolean,
        default:false,
    }
},
{
    timestamps:true,
}
)

const Message = models.Message || model("Message",MessageSchema)
export default Message