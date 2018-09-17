let Question_List = require('../models/question_list');
let question_list = new Question_List();

exports.show_quiz = function(req,res){
    question_list = new Question_List();
    res.render('questions_v2',{path_UI: question_list.path_UI});
};

exports.answer_question = function(req,res){
    const question = req.body.question;
    const answer = req.body.answer;
    const index = req.body.index;
    console.log("index:",index);
    question_list.Cut_List(index);
    question_list.Add_Node(question,answer);
    console.log("success");
    let obj = {
        question:question_list.New_Question(),
        options:question_list.New_Options(),
        path_length:question_list.path_UI.length,
        result: question_list.Is_Result(),
    };

    res.send(obj);
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