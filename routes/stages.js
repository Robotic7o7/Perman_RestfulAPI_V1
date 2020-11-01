var express = require('express');
var router = express.Router();

//import models
const Stage = require('../models/stage')


//get stages
router.get('/', async function (req, res) {
  try {
    const stages = await Stage.find()
    res.status(200).json(stages)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get stage by id
router.get('/:id', async function (req, res) {
  try {
    const stage = await Stage.findById(req.params.id)
    res.status(200).json(stage)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new stage
router.post('/new', async function (req, res) {

  const stage = new Stage({
    stage_name:req.body.stage_name,
    status:'1'
  })

  try {
    const savedStage = await stage.save()
    res.status(200).json({ message: "success", additional_info: "stage created" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//update a stage
router.patch('/:id/update_stage', async function (req, res) {
  try {
    updatedStage = await Stage.updateOne(
      { _id: req.params.id },
      {
        $set: {
            stage_name:req.body.stage_name
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Stage updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//set inactive
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedStage = await Stage.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Stage inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a stage
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedStage = await Stage.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "Stage deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;