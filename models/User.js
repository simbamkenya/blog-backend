const mongoose = require('mongoose');

const userSchema = new mongoose({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
})

exports.User = mongoose.model('User', userSchema)