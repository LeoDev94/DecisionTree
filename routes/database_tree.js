var express = require('express');
var router = express.Router();

let question_controller = require('../controllers/question_controller');
let index_controller = require('../controllers/index_controller');
let result_controller = require('../controllers/result_controller');

/* GET home page. */
router.get('/', index_controller.index);

//GET show questions
router.get('/quiz',question_controller.show_quiz);

//GET show db data


//POST add Node
router.post('/addNode',question_controller.add_node);

//POST show results
router.post('/showResult',result_controller.show_results);





module.exports = router;