const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
   task_display_id:{
       type:String,
       required:true,
   },
   task_name:{
    type:String,
    required:true,
    },
    description:{
        type:String,
        required:true,
    },
    client_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    },
    account_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Account",
        required:true
    },
    active_stage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stage",
        required:true
    },
    tats:{
        type:number,
        required:true,
    },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Task', taskSchema)