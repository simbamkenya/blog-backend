const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
})

exports.Comment = mongoose.model('Comment', commentSchema)