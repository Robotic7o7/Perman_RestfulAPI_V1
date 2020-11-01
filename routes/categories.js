var express = require('express');
var router = express.Router();

//import models
const Category = require('../models/category')


//get categories
router.get('/', async function (req, res) {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get category by id
router.get('/:id', async function (req, res) {
  try {
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new category
router.post('/new', async function (req, res) {

  const category = new Category({
    category_name:req.body.category_name,
    status:'1'
  })

  try {
    const savedCategory = await category.save()
    res.status(200).json({ message: "success", additional_info: "category created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//update a category
router.patch('/:id/update_category', async function (req, res) {
  try {
    updatedCategory = await Category.updateOne(
      { _id: req.params.id },
      {
        $set: {
            category_name:req.body.category_name
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "category updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//set inactive
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedCategory = await Category.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "category inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a category
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedCategory = await Category.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "category deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;