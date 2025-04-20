const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    //* Post body
    body:{
        type: String,
        required: true
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],


    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

//* exporst post model as Post
module.exports = mongoose.model("Post", postSchema);