let Question_List = require('../models/question_list');
let question_list = new Question_List();
let DbGroupArray = require('../models/result_UI');

let save_result = require('../models/result_DB');

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

    let obj = {
        question:question_list.New_Question(),
        options:question_list.New_Options(),
        path_length:question_list.path_UI.length,
        result: question_list.Is_Result(),
    };
    console.log("success");
    res.send(question_list.New_Data());
};

exports.save_answer = function(req,res){
    let has_db = req.body.opc_db;
    question_list.Add_Result(has_db);
    save_result(question_list.path,has_db);
    let db_gArray = new DbGroupArray(question_list.path_UI);
    console.log(question_list.path);
    res.render('results',{db_groups:db_gArray.db_groupArray});
};

