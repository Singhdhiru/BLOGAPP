const Like = require('../models/likeModel');
const Post = require('../models/postModel');

//* create like cintroller
exports.likePost = async(req, res)=>{
    try{
        //*extract data from req body
        //* if you want to like a post then you have atleat to data postId, and user
        const {post, user} = req.body;

        //* create like object
        const likePost = new Like({
            post,
            user
        })

        //* save object
        const response = await likePost.save();

        //* update post like array 
        const updatePostLike = await Post.findByIdAndUpdate(post, {$push: {likes: response._id}}, {new: true})
                                         .populate('likes')
                                         .exec();
        res.status(200).json({
            success: true,
            message: "Like post Succesfully",
            data: updatePostLike
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}


//* create unlike controller
exports.unlikePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        
        //* Find and delete the like by post+user
        const deletedLike = await Like.findOneAndDelete({ post, user });
        
        //* Check if the like exists
        if (!deletedLike) {
            return res.status(404).json({
                success: false,
                message: "Like not found"
            });
        }
        
        //* Update post like array
        const updatePostLike = await Post.findByIdAndUpdate(
            post, 
            { $pull: { likes: deletedLike._id } }, 
            { new: true }
        );
        
        res.status(200).json({
            success: true,
            message: "Unlike post successfully",
            data: updatePostLike
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}