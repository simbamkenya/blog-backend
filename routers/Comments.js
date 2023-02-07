const { Comment } = require('../models/Comment');
const { Post } = require('../models/Post')
const { User } = require('../models/User')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


//fetch comments for a post
router.get('/', async (req, res) => {
  const commentList = Comment.find()
  if(!commentList) return res.status(500).json({success:false})

  res.send(commentList)
})


//pposting a comment
router.post('/', async (req, res) => {
    const {commentContent, post,  author } = req.body;
    console.log(post)
  
    const commentPost = await Post.findById(post);
    if(!commentPost) return res.status(400).send('invalid post')

    const authorPost = await User.findById(author);
    if(!authorPost) return res.status(400).send('invalid author')

    let comment = new Comment({commentContent, post: commentPost, author: authorPost })
    comment = await comment.save()

    res.status(200).send(comment)
})


//delete a comment
router.delete('/:id', async (req, res) => {
    const postComment = await Comment.findById(req.params.id);
    if(!postComment) return res.status(404).send('Comment not deleted!')
    
    res.status(200).send(postComment)


})



module.exports = router;