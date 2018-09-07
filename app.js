

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');
var saveRouter = require('./routes/savePath');
var questionsRouter = require('./routes/questions');


var app = express();




// view engine setup
/*db.fetch({},function (err,body) {
    console.log(body.rows[0].doc.path);
});*/

/*(db.list(function(err,body){
    if(!err){
        body.rows.forEach(function (doc) {
            console.log(doc);
        })
    }else{
        console.log(err);
    }
}));*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/results', resultsRouter);
app.use('/savePath', saveRouter);
app.use('/questions',questionsRouter);

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
