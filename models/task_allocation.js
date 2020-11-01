const mongoose = require('mongoose')

const task_allocationSchema = mongoose.Schema({
   task_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Task",
    required:true,
   },
   user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
    },
    role_name:{
    type:String,
    required:true,
    enum:['ADMIN','MANAGER','ASSOCIATE']
    },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Task_allocation', task_allocationSchema)