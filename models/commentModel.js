const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // * refrence to the post Schema
    },

    //* which user comment on the post
    user: {
        type: String,
        required: true
    },

    //* comment body
    body: {
        type: String,
        required: true
    }

})

//* exporst the commentSchema
module.exports = mongoose.model("Comment", commentSchema);
