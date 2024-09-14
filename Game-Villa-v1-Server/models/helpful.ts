import mongoose, { Schema } from 'mongoose'

const helpfulSchema = new Schema({
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    reviewId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
        required: true
    },
    number: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        }
    ]
})

export const Helpful = mongoose.model('Helpful', helpfulSchema)