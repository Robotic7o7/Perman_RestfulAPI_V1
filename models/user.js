const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    employee_id:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },

    password:{
        type:String,
        required:true
    },

    first_name:{
        type:String,
        required:true   
    },
    last_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true,
        match:/^(\+\d{1,3}[- ]?)?\d{10}$/
    },
    role_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    updated_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    deleted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    created_date:{
        type:Date,
        default:Date.now()
    },
    updated_date:{
        type:Date
    },
    deleted_date:{
        type:Date
    },
    status:{
        type:String
    }
})

module.exports = mongoose.model('User', userSchema)