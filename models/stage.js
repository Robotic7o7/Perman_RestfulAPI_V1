const mongoose = require('mongoose')

const stageSchema = mongoose.Schema({
   stage_name:{
       type:String,
       required:true,
   },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Stage', stageSchema)