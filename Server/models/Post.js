const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    hashtag: {
        type: String,
        required: true,      
    },
    category: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    url: {
        type: String, 
        required: true,
        unique : true,
    }
})

module.exports = mongoose.model('Posts', PostSchema);