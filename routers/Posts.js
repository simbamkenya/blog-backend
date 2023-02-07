const {Post } = require('../models/Post');
const { Category } = require('../models/Category')
const { User } = require('../models/User')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

//fetch posts
router.get('/', async (req, res) => {
   const postList = await Post.find();
   if(!postList) return res.status(500).json({success: false})

   res.send(postList)
})


//fetch a single post
router.get('/:id', async (req, res) => {
   const post = await Post.findById(req.params.id);
   if(!post) return res.status(400).send('Post with this given id dis not found')

   res.status(200).send(post)
})


//create a single post
router.post('/', async (req, res) => {
   const { title, author, content, image, category  } = req.body;

   const postAuthor = await User.findById(author);
   if(!postAuthor) return res.status(400).send('invalid authors')


   const postCategory = await Category.findById(category)
   if(!postCategory) return res.status(400).send('invalid category')

   let post = await new Post({ title, author: postAuthor, content, image, category: postCategory })

   product = await post.save()
   if(!post) return res.status(500).send('post was not created')

   res.status(200).send(post)
})

//update a post
router.put('/', async (req, res) => {
   if(mongoose.isValidObjectId(req.params.id)) return res.status(400).send('Invalid post id')
   
   const { title, content, image, author, category } = req.body;
   const post = await Post.findByIdAndUpdate(req.params.id, { title, content, image, author, category })

   if(!post) return res.status(500).send('the post was not updated')
   res.send(post)
   
})

//delete a post
router.delete('/:id', async (req, res) => {
   const post = await Post.findByIdAndRemove(req.params.id);
   if(!post) return res.status(404).send('Post is not deleted')

   res.status(200).send(product)
})



module.exports = router; 