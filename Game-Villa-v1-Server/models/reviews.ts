import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema({
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
            validator: (words: string) => words.length > 9 && /^\s+|^\d+/.test(words) === true,
            message: 'Invalid content length'
        }
    },
    pictures: {
        main: String,
        secondary: String,
        tertiary: String
    }
})

export const Review = mongoose.model('Review', reviewSchema)