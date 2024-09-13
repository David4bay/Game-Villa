import mongoose, { Document, Schema } from 'mongoose'

interface TokenField extends Document {
    userId: mongoose.Types.ObjectId;
    token: string;
    createdAt: Date;
}

const tokenSchema = new Schema<TokenField>({
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

export const Token = mongoose.model<TokenField>('Token', tokenSchema)