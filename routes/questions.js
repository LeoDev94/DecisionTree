var express = require('express');
let question_controller = require('../controllers/question_controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //res.render('index', { title: 'Express' });
    res.render('questions');
});
router.post('/',function (req,res,next) {

});

//router.get('/v2',question_controller.show_quiz);

//router.get('/v2/answer',question_controller.answer_question);

module.exports = router;