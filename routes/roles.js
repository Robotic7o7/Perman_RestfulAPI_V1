var express = require('express');
var router = express.Router();

//import models
const Role = require('../models/role')


//get role
router.get('/', async function (req, res) {
  try {
    const roles = await Role.find()
    res.status(200).json(roles)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get role by id
router.get('/:id', async function (req, res) {
  try {
    const role = await Role.findById(req.params.id)
    res.status(200).json(role)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new role
router.post('/new', async function (req, res) {

  const role = new Role({
    role_name:req.body.role_name,
    status:'1'
  })

  try {
    const savedRole = await role.save()
    res.status(200).json({ message: "success", additional_info: "role created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//update a role
router.patch('/:id/update_role', async function (req, res) {
  try {
    updatedRole = await Role.updateOne(
      { _id: req.params.id },
      {
        $set: {
            role_name:req.body.role_name
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


//set inactive
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedRole = await Role.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "role inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a role
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedRole = await Role.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "role deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;