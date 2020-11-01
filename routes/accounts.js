var express = require('express');
var router = express.Router();

//import models
const Account = require('../models/account')


//get accounts
router.get('/', async function (req, res) {
  try {
    const accounts = await Account.find()
    res.status(200).json(accounts)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get account by id
router.get('/:id', async function (req, res) {
  try {
    const account = await Account.findById(req.params.id)
    res.status(200).json(account)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new account
router.post('/new', async function (req, res) {

  const account = new Account({
    account_name:req.body.account_name,
    status:'1'
  })

  try {
    const savedAccount = await account.save()
    res.status(200).json({ message: "success", additional_info: "Account created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//update an account
router.patch('/:id/update_account', async function (req, res) {
  try {
    updatedAccount = await Account.updateOne(
      { _id: req.params.id },
      {
        $set: {
            account_name:req.body.account_name
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Account updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//set inactive
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedAccount = await Account.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Account inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete an account
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedAccount = await Account.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "Account deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;