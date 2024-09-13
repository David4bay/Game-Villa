import mongoose, { Document, Schema } from 'mongoose'

interface LikeField extends Document {
    userId: mongoose.Types.ObjectId;
    type: 'like' | 'dislike';
    targetModel: 'Review' | 'Comment';
    targetId: mongoose.Types.ObjectId
}

const likeSchema = new Schema<LikeField>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    type: {
        type: String,
        enum: ['like', 'dislike'],
        required: true
    },
    targetModel: {
        type: String,
        enum: ['Review', 'Comment'],
        required: true
    },
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

export const Likes = mongoose.model<LikeField>('Like', likeSchema)