var express = require('express');
var constants = require('../util/page_data');
var router = express.Router();

let question_controller = require('../controllers/question_controller');
//let result_controller = require('../controllers/result_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{text: constants.index_text});
});

router.get('/quiz',question_controller.show_quiz);
router.post('/quiz/answer',question_controller.answer_question);
router.post('/results',question_controller.save_answer);
//router.post('/results',result_controller.show_results);


module.exports = router;
