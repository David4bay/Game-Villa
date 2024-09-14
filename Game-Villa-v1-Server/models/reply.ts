import mongoose, { Schema } from 'mongoose'

const replySchema = new Schema({
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
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
    updated: {
        type: Boolean,
        default: false
    }
});
  
const Reply = mongoose.model('Reply', replySchema);