const express = require('express');
const router = express.Router();

//* import controllers
const {createComment, getCommentByID} = require('../controllers/commentController');
const {createPost, getPost} = require('../controllers/postController')


//* map Api route
router.post('/comment/create', createComment);
router.get('/comment/:id', getCommentByID);
router.post('/create/post', createPost);
router.get('/post/:id', getPost);

//* export router
module.exports = router;
