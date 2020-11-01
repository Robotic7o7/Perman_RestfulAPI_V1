const { request } = require('express');
var express = require('express');
var router = express.Router();


//import models
const Client = require('../models/client')


//get client
router.get('/', async function (req, res) {
  try {
    const clients = await Client.find()
    res.status(200).json(clients)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get client by id
router.get('/:id', async function (req, res) {
  try {
    const client = await Client.findById(req.params.id)
    res.status(200).json(client)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new client
router.post('/new', async function (req, res) {

  const user = new Client({
    client_display_id: req.body.client_display_id,
    client_name: req.body.client_name,
    contact_number: req.body.contact_number,
    address: req.body.address,
    poc: req.body.poc,
    poc_number: req.body.poc_number,
    spoc: req.body.spoc,
    spoc_number: req.body.spoc_number,
    created_by: req.body.created_by,
    status:'1'
  })

  try {
    const savedClient = await client.save()
    res.status(200).json({ message: "success", additional_info: "client created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})



//update a client
router.patch('/:id/update_client', async function (req, res) {
  try {
    updatedClient = await Client.updateOne(
      { _id: req.params.id },
      {
        $set: {
            client_display_id: req.body.client_display_id,
            client_name: req.body.client_name,
            contact_number: req.body.contact_number,
            address: req.body.address,
            poc: req.body.poc,
            poc_number: req.body.poc_number,
            spoc: req.body.spoc,
            spoc_number: req.body.spoc_number,
            updated_by: req.body.updated_by,
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "client updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//set client as inactive
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedClient = await Client.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "client set inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a user
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedUser = await Client.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "client deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;