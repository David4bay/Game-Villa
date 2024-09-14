import mongoose, { Schema } from 'mongoose'

const tokenSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        expires: 3600,
        required: true
    }
})

export const Token = mongoose.model('Token', tokenSchema)