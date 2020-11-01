const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
   account_name:{
       type:String,
       required:true,
   },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Account', accountSchema)