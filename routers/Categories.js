const { Category } = require('../models/Category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { route } = require('./Posts');




//posting a category 
router.post('/', async (req, res) => {
    const { name } = req.body;

    let category = new Category({ name });
    category = await category.save()
    if(!category) return res.status(400).send('the category was not created')
    
    res.send(category)
})

//fetch categories
router.get('/', async (req, res) => {
    const categoryList = await Category.find();
    if(!categoryList) return res.status(500).json({success: false})
    res.send(categoryList)
})

//fetch a category
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(400).send('Category with the given id is not found')

    res.status(200).send(category)
})

//deleted a category
router.delete('/:id', async (req, res) => {
   const category = await Category.findByIdAndRemove(req.params.id)
   if(!category) return res.status(404).send('users not deleted')
   res.status(200).send(category)
})


module.exports = router;