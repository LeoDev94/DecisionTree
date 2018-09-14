let question_list = require('../models/question_list');
//let question_html = require('');

exports.show_quiz = function(req,res){
    res.render('questions_v2',{path_UI: question_list.path_UI});
};

exports.answer_question = function(req,res){
    const question = req.body.question;
    const answer = req.body.answer;
    question_list.Add_Node(question,answer);
    res.send({path_UI:question_list.path_UI});
};

exports.show_path = function(req,res){
    res.send('');
};

exports.add_node = function(req,res){
    res.send('');
};

exports.update_path = function(req,res){
    res.send('');
};