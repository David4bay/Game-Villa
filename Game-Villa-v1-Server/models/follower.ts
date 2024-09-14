import mongoose, { Schema } from 'mongoose'

const followerSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    },

})

export const Follower = mongoose.model('Follower', followerSchema)