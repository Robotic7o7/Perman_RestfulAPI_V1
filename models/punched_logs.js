const mongoose = require('mongoose')

const punched_logsSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    punch_in:{
        type:Date,
        required:true,
    },
    punch_out:{
        type:Date,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Punched_logs', punched_logsSchema)