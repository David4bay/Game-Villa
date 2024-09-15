import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema({
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    },
    commenterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comment: {
      type: String,
      required: true,
      minLength: 4,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export const Comment = mongoose.model('Comment', commentSchema)