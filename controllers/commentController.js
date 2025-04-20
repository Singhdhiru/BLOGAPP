const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async(req, res)=>{
    try{
        //* extract data from req body
        const {post, user, body} = req.body;

        //* create comment object
        const newComment = new Comment({
            post,
            user,
            body
        })

        //* save the new comment in the comment db
        const response = await newComment.save();

        //* find the post by id in post model and update comment array
        const updatePostComment = await Post.findByIdAndUpdate(post, {$push: {comments:response._id}}, {new: true})
                                 .populate('comments')
                                 .exec();
        
        //* 
        res.status(200).json({
            success: true,
            message: "Comment created successfully",
            data: updatePostComment
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


exports.getCommentByID = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({
                success: false,
                message: "Invalid id"
            })
        }
        const findComment = await Comment.find({id});
        if(!findComment){
            return res.status(204).json({
                success: false,
                message: "comment not fount"
            })
        }

        res.status(200).json({
            success: true,
            message: "Comment fetch succesfully",
            data: findComment
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