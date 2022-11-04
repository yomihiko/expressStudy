// const express = require("express");
// const app = express();

// const server = app.listen(3000, () => {
//     console.log("Start Node PORT:" + server.address().port);
// });


// app.get("/", (req, res, next) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.send('<h1>hello World v2</h1>')
// });
// app.get("/ip", (req, res, next) => {
//     res.send(req.header("User-Agent"));
// })
// app.get("/photo", (req, res, next) => {
//     res.setHeader('Content-Type', 'image/jpg')
//     res.sendFile(__dirname + '/image/hamster.jpg')
// });

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imageRouter = require('./routes/image');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/image', imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

