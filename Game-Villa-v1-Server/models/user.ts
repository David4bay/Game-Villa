import mongoose, { Document, Schema } from 'mongoose'
import crypto from 'crypto'

const userSchema = new Schema({
	profilePicture: String,
	username: {
		type: String,
		required: true,
		minLength: 5
	},
	password: {
		type: String,
		required: true,
		minLength: 6
	},
	salt: {
		type: String,
	},
	email: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},    
	joined: {
		type: Date,
		default: () => Date.now(),
		immutable: true
	},
	reviews: [
		{
			type:  mongoose.Schema.Types.ObjectId,
			ref: 'reviews'
		}
	],
	earnings: [
		{
		type:  mongoose.Schema.Types.ObjectId,
		ref: 'earnings'
		}
	],
	followersCount: {
		type: Number,
		default: 0
	},
	followingCount: {
		type: Number,
		default: 0
	},
	comments: [
		{
		type:  mongoose.Schema.Types.ObjectId,
		ref: 'comment'
		}
	],
	helpful: [
		{
			type:  mongoose.Schema.Types.ObjectId,
			ref: 'helpful'
		}
	],
	likes: [
		{
			type:  mongoose.Schema.Types.ObjectId,
			ref: 'like'
		}
	]
})

userSchema.pre('save', async function(done) {
		if (this.isModified("password")) {

	let salt = await crypto.randomBytes(Number(process.env.BYTES_LENGTH!)).toString("hex")
	let hashedPassword = crypto.createHmac("md5", salt).update(this.password as string).digest("hex")

	this.set("password", hashedPassword)
	this.set("salt", salt)

		}
		done()
})

export const User = mongoose.model('User', userSchema)