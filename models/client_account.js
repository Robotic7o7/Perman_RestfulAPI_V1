const mongoose = require('mongoose')

const client_accountSchema = mongoose.Schema({
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
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Client_account', client_accountSchema)