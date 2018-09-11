var express = require('express');
var router = express.Router();
//let DbGroupArray = require('../models/result_UI');
let result_controller = require('../controllers/result_controller');
//let DB_Arbol = require('../util/db_config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/',result_controller.show_results);


module.exports = router;