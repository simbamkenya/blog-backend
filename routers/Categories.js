const { Category } = require('../models/Category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


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
//update a category
router.put('/:id', async (req, res) => {
  const category = await Category.find
})

//deleted a category
router.delete('/:id', async (req, res) => {

})


module.exports = router;