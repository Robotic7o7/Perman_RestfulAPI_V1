var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');


//import models
const User = require('../models/user')


//get users
router.get('/', async function (req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get user by id
router.get('/:id', async function (req, res) {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new user
router.post('/new', async function (req, res) {

  const user = new User({
    employee_id: req.body.employee_id,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    role_id: req.body.role_id,
    created_by: req.body.created_by,
    status:'1'
  })

  try {
    const savedUser = await user.save()
    res.status(200).json({ message: "success", additional_info: "user created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//update a user
router.patch('/:id/update_password', async function (req, res) {
  try {
    updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          password: await bcrypt.hash(req.body.password, 10)
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "password updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//update a user
router.patch('/:id/update_profile', async function (req, res) {
  try {
    updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone_number: req.body.phone_number,
          role_id: req.body.role_id,
          updated_by: req.body.updated_by
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "user updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//update a user
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "user inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a user
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedUser = await User.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "user deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;