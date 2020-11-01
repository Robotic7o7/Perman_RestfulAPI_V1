var express = require('express');
var router = express.Router();


//import models
const Task = require('../models/task')


//get tasks
router.get('/', async function (req, res) {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
});


//get Task by id
router.get('/:id', async function (req, res) {
  try {
    const task = await Task.findById(req.params.id)
    res.status(200).json(task)
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

//new task
router.post('/new', async function (req, res) {

  const user = new Task({
    task_display_id: req.body.task_display_id,
    task_name: req.body.task_name,
    description: req.body.description,
    first_name: req.body.first_name,
    tats: req.body.tats,
    phone_number: req.body.phone_number,
    status:'1'
  })

  try {
    const savedTask = await task.save()
    res.status(200).json({ message: "success", additional_info: "Task added" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//update a tat
router.patch('/:id/upate_tat', async function (req, res) {
    try {
      updatedTask = await Task.updateOne(
        { _id: req.params.id },
        {
          $set: {
            tat:req.body.tat
          }
        },
        { runValidators: true }
      )
  
      res.status(200).json({ message: "success", additional_info: "Tat updated" })
    }
    catch (err) {
      res.status(500).json({ error: err })
    }
  })
  

//update a task
router.patch('/:id/update_task', async function (req, res) {
  try {
    updatedTask = await Task.updateOne(
      { _id: req.params.id },
      {
        $set: {
            task_display_id: req.body.task_display_id,
            task_name: req.body.task_name,
            description: req.body.description,
            first_name: req.body.first_name,
            tats: req.body.tats,
            phone_number: req.body.phone_number,
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Task updated" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//update a task
router.patch('/:id/set_inactive', async function (req, res) {
  try {
    updatedTask = await Task.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status:'0'
        }
      },
      { runValidators: true }
    )

    res.status(200).json({ message: "success", additional_info: "Task inactive" })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})


//delete a task
router.delete('/:id/delete', async function (req, res) {
  try {
    const removedTask = await Task.remove({ _id: req.params.id })
    res.status(200).json({ message: "success", additional_info: "Task deleted" })
  }
  catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;