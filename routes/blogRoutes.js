const express = require('express');
const router = express.Router();

//* import controllers
const {createComment} = require('../controllers/commentController');
const {createPost, getAllPost} = require('../controllers/postController')
const {likePost, unlikePost} = require('../controllers/likeController');


//* map Api route
router.post('/comment/create', createComment);
router.post('/create/post', createPost);
router.get('/post/getPost', getAllPost);
router.post('/like/likes', likePost);
router.post('/like/unlike', unlikePost);

//* export router
module.exports = router;
