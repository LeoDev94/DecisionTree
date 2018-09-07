var express = require('express');
var constants = require('../util/page_data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.render('index',{text: constants.index_text});
});

module.exports = router;
