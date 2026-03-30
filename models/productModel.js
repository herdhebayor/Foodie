/** @format */

import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
	options: [{
			name: {
				type: String,
			},
			price: {
				type: String,
			},

		}],
		price: {
			type:Number
		},
		images: {
			type: String
		},
		available: {
			type: Boolean,
			default: true,
		},
		size: {
			type: String,
		},
	},
	{ timestamps: true }
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
