import mongoose, { Document, Schema} from 'mongoose'

const friendSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    friendList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})

export const Friend = mongoose.model('Friend', friendSchema)