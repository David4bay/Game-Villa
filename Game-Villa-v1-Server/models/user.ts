import mongoose, { Document, Schema } from 'mongoose'

interface UserField {
	profilePicture: string;
    username: string;
    password: string;
	hash: string;
	salt: string
    email: string;
    age: number;
    joined: Date;
    friends: mongoose.Types.ObjectId[] | [];
    reviews: mongoose.Types.ObjectId[] | [];
    earnings: mongoose.Types.ObjectId[] | [];
	followers: mongoose.Types.ObjectId[] | [];
	following: mongoose.Types.ObjectId[] | [];
	comments: mongoose.Types.ObjectId[] | [];
	helpful: mongoose.Types.ObjectId[] | [];
	likes: mongoose.Types.ObjectId[] | [];
}

const userSchema = new Schema<UserField>({
	profilePicture: String,
	username: {
		type: String,
		required: true,
		minLength: 5
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: (num: string) => num.length >= 6,
			message: () => `Password length must be longer than 5 characters.`
		},
		minLength: 6
	},
	joined: {
		type: Date,
		default: () => Date.now(),
		immutable: true
	},
	friends: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		}
	],
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'reviews'
		}
	],
	earnings: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'earnings'
		}
	],
	followers: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
		}
	],
	following: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
		}
	],
	comments: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'comment'
		}
	],
	helpful: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'helpful'
		}
	],
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'like'
		}
	]
})

export const User = mongoose.model<UserField>('User', userSchema)