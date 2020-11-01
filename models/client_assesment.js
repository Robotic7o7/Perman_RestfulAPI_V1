const mongoose = require('mongoose')

const client_assesmentSchema = mongoose.Schema({
    client_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    },
    start_date:{
        type:Date,
        default:Date.now()
    },
    end_date:{
        type:Date
    },
    assesment_value:{
        type:String,
        required:true,
    },
    frequency:{
        type:String,
        required:true,
    },
   status:{
       type:String,
       required:true,
   }
})

module.exports = mongoose.model('Client_assesment', client_assesmentSchema)