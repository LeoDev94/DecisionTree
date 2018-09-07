const dbConfig = {
    "apikey": "wxYEvRijZPQfModtNjbxnfna8pTDwt_Sm_tS7aov3nZp",
    "host": "1647891a-d405-4dd5-9f03-f822caebac2c-bluemix.cloudant.com",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:cloudantnosqldb:us-south:a/ae35b4fafc8aaf2cedf1f57604642d25:eed40a29-efb8-4306-9370-7dfe3701d6a9::",
    "iam_apikey_name": "auto-generated-apikey-370c2671-fc38-4460-9818-ed888164d80a",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/ae35b4fafc8aaf2cedf1f57604642d25::serviceid:ServiceId-d10c33b0-1b9b-4fe1-9461-47df67bb796a",
    "password": "a9fd5eaef0c0c8c278d6761da68e3d6e13465c4d16fc556a06c3d5eba7c35404",
    "port": 443,
    "url": "https://1647891a-d405-4dd5-9f03-f822caebac2c-bluemix:a9fd5eaef0c0c8c278d6761da68e3d6e13465c4d16fc556a06c3d5eba7c35404@1647891a-d405-4dd5-9f03-f822caebac2c-bluemix.cloudant.com",
    "username": "1647891a-d405-4dd5-9f03-f822caebac2c-bluemix"
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');
var saveRouter = require('./routes/savePath');
var questionsRouter = require('./routes/questions');
var Cloudant = require('@cloudant/cloudant');

var app = express();



var cloudant = Cloudant(dbConfig);
var dbname = 'arbol';
var db = cloudant.db.use(dbname);
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
