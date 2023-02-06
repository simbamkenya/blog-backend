const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

exports.Tag = mongoose.model('Tag', tagSchema)