import mongoose, { Document, Schema } from 'mongoose'

interface HelpfulField extends Document {
    reviewerId: mongoose.Types.ObjectId;
    reviewId: mongoose.Types.ObjectId;
    number: mongoose.Types.ObjectId[];
}

const helpfulSchema = new Schema<HelpfulField>({
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

export const Helpful = mongoose.model<HelpfulField>('Helpful', helpfulSchema)