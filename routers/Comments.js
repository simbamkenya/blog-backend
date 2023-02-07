const { Comment } = require('../models/Comment');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


//fetch comments for a post
router.get('/', async (req, res) => {
  const commentList = Comment.find()
  if(!commentList) return res.status(500).json({success:false})

  res.send(commentList)
})


//delete a comment
router.delete('/id', async (req, res) => {

})



module.exports = router;