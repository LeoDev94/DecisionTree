var express = require('express');
//var constants = require('../util/page_data');
var router = express.Router();

let index_controller = require('../controllers/index_controller');
let question_controller = require('../controllers/question_controller');
//let result_controller = require('../controllers/result_controller');

/* GET home page. */
router.get('/',index_controller.index);

/*Other Routes*/
//GET Questions
router.get('/quiz',question_controller.show_quiz);
//POST Receive Answer
router.post('/quiz/answer',question_controller.answer_question);

//POST Results
router.post('/results',question_controller.save_answer);
//router.post('/results',result_controller.show_results);


module.exports = router;
