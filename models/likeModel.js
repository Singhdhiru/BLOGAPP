const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema ({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like" // * refrence to the post Schema
    },
    
    //* which user comment on the post
    user: {
        type: string,
        required: true
    }
})
module.exports = mongoose.model("Like", likeSchema);