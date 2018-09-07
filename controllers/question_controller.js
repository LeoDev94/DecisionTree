let question_list = require('../models/question_list');

exports.show_quiz = function(req,res){
    res.render('questions_v2',{node_path: question_list});
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