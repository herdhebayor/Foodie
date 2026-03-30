/** @format */

import mongoose, { Schema, models, model } from 'mongoose'

const OrderSchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		items: [
			{
				name: String,
				image: String,
				quantity: { type: Number, default: 1 },
				purchasePrice: Number,
				price: Number,
				extras: [{
					name: String,
					price: Number
				}],
			},
		],
		receiver: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		deliveryAddress: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		subtotal: {
			type: Number,
			required: true
		},
		tax: {
			type: Number,
			default: 0
		},
		discount: {
			type: Number,
			default: 0
		},
		deliveryFee: {
			type: Number,
			default: 0
		},
		totalAmount: {
			type: Number,
			required: true
		},
		deliveryTime: String,
		status: {
            type: String,
            enum: ['pending', 'confirmed', 'out for delivery', 'delivered', 'cancelled'],
            default: 'pending'
        }
	},
	{ timestamps: true }
)

const Order = models.Order || model('Order', OrderSchema)

export default Order
