var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
// const socket = require('socket.io');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { Server } = require('http');

var app = express();


//Connection to DB
mongoose.connect('mongodb+srv://IsraelaZimru:2DFOudU8lkOZ4uC9@fullstackprojects.epp4t.mongodb.net/websocket',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch(err => console.log(err));




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
