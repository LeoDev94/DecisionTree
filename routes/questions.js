var express = require('express');
let question_controller = require('../controllers/question_controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //res.render('index', { title: 'Express' });
    //res.render('questions');
    res.redirect('/');
});
/*
router.get('/v2',question_controller.show_quiz);
router.post('/v2/answer',question_controller.answer_question);
router.post('/v2/results',question_controller.save_answer);
*/
module.exports = router;