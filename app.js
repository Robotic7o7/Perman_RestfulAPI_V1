var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
var dotenv = require('dotenv')

dotenv.config()

//mongoose
var mongooseOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

mongoose.connect('mongodb+srv://admin:m6HAC2D46nonulAr@cluster0.jipu4.mongodb.net/test', mongooseOptions)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection established")
});

//--end--mongoose--



var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter)
app.use('/users', usersRouter);


module.exports = app;
