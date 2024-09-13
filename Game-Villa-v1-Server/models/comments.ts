import mongoose, { Document, Schema } from 'mongoose'

interface CommentField extends Document {
    commenterId: mongoose.Types.ObjectId;
    comment: string;
    reply: mongoose.Types.ObjectId[] | [];
    likes: mongoose.Types.ObjectId[] | [];
    dislikes: mongoose.Types.ObjectId[] | [];
}

const commentSchema = new Schema({
    commenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comment: {
        type: String,
        required: true,
        minLength: 4,
        validate: {
            validator: (word: string) => word.length > 0,
            message: () => `Cannot save empty comment`
        }
    },
    reply: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
        }
    ],
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
    ]
})

export const Comment = mongoose.model<CommentField>('Comment', commentSchema)