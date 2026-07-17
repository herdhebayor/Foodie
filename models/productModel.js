/** @format */

import mongoose, { Schema, model, models } from 'mongoose'

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
		reviews:[{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			comment:{
				type:String,
				default:'',
				required:true
			},
			rating:{
				type:Number,
				deafault:1,
				required: true,
			}
			
		}]
	},
	{ timestamps: true }
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
