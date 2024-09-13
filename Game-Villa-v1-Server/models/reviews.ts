import mongoose, { Document, Schema } from 'mongoose'

interface ReviewField extends Document {
    helpful: mongoose.Types.ObjectId[];
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    reviewerId: mongoose.Types.ObjectId;
    comments: mongoose.Types.ObjectId[];
    gameLink: string;
    header: string;
    content: string;
    pictures: {
        main: string;
        secondary: string;
        tertiary: string;
    }
}

const reviewSchema = new Schema({
    helpful: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'helpful'
    },
    likes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
        }
    ],
    dislikes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
        }
    ],
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
        }
    ],
    gameLink: String,
    header: {
        type: String,
        validate: {
            validator: (words: string) => words.length > 3,
            message: 'Invalid title length'
        }
    },
    content: {
        type: String,
        validate: {
            validator: (words: string) => words.length > 9 && /^\s+|^\d+/.test(word) !== true,
            message: 'Invalid title length'
        }
    },
    pictures: {
        main: String,
        secondary: String,
        tertiary: String
    }
})

export const Review = mongoose.model<ReviewField>('Review', reviewSchema)