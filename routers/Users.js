const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//fetch users
router.get('/', async (req, res) => {
  const userList = await User.find()
  if(!userList) return res.status(500).json({ success: false })
  res.send(userList)
})


//fetch specific user
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(400).send('User with given id was not found')
   
    res.status(200).send(user)
})

//register user
router.post('/', async (req, res) => {
    const { username, password, email, profilePic, desc } = req.body;

    let user = new User({ username, password: bcrypt.hashSync(password, 10), email, profilePic, desc})
    user = await user.save()

    res.send(user)

})

//login
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.secret;

    if(!user) res.status(400).send('user was not found')

    if(user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {
                expiresIn: '1d'
            }
        )
        res.status(400).send({email: user.email, token: token})
    } else {
        res.status(400).send('wrong password')
    }
})



//delete user
router.delete('/:id', async (req, res) => {
 const user = await User.findByIdAndRemove(req.params.id);
 if(!user) return res.status(404).send('User is not deleted')

 res.status(200).send(user)
})



module.exports = router;