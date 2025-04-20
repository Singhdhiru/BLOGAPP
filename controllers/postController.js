const Post = require('../models/postModel');

//* creat Post
exports.createPost = async(req, res)=>{
    try{
        //* extract data from req body
        const {titel, body} = req.body;

        //* create post object
        const newPost = new Post({
            titel,
            body
        })

        // * save the new post in the DB
        const response = await newPost.save();

        res.status(200).json({
            success: true,
            message: "Post created succesfully",
            data: response
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
//* get Post
exports.getAllPost = async(req,res)=>{
    try{
        const findAllPost = await Post.find() .populate('comments') .populate('likes'). exec();
        res.status(200).json({
            success: true,
            message: "Post Fetch successfully",
            data: findAllPost
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}