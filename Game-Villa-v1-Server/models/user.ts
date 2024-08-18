import mongoose from "mongoose";

interface UserField {
	username: string;
	password: string;
	email: string;
	age: number;
}

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: 5,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
});
