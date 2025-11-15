const express = require('express');
const { getPost, createPost, searchPost, getDetail, getUpdate, deletePost } = require('../controller/post.js');
const auth = require('../middleware/auth.js');

const router = express.Router();


router.get('/getPost', getPost)
router.get('/searchPost', searchPost)
router.get('/getDetail/:id', getDetail)

router.post('/createPost', auth, createPost)

router.patch('/getUpdate/:id', auth, getUpdate)

router.delete('/deletePost/:id', auth, deletePost)



module.exports = router
