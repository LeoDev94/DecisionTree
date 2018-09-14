
const question_data = require('../util/question_data');

const yes_no = [question_data.options_text[3],question_data.options_text[4]];

class question_node{
    constructor(text,options,children){
        this._text = text;
        this._options = options;
        this._children = children;
        this._father = null;
        if(children!==null)
            for(let i=0; i<this._children.length;i++){
                this._children[i].father = this;
            }
    }
    set father(value) {
        this._father = value;
    }
    //Getters
    get father() {
        return this._father;
    }

    get children() {
        return this._children;
    }
    get options() {
        return this._options;
    }
    get text() {
        return this._text;
    }
}


let scenario_1 = new question_node("",[question_data.answers[4],question_data.answers[0]],null);
let scenario_2 = new question_node("",[question_data.answers[0]],null);
let scenario_3 = new question_node("",[question_data.answers[2]],null);
let scenario_4 = new question_node("",[question_data.answers[0],question_data.answers[2]],null);
let scenario_5 = new question_node("",[question_data.answers[6]],null);
let scenario_6 = new question_node("",[question_data.answers[1],question_data.answers[4]],null);
let scenario_7 = new question_node("",[question_data.answers[2],question_data.answers[5]],null);
let scenario_8 = new question_node("",[question_data.answers[4],question_data.answers[2]],null);
let scenario_9 = new question_node("",[question_data.answers[5],question_data.answers[2]],null);
let scenario_10 = new question_node("",[question_data.answers[7]],null);

let question_tree = new question_node(
    question_data.question_text[0],
    [question_data.options_text[0],question_data.options_text[1],question_data.options_text[2]],
    [
        new question_node(
            question_data.question_text[1],
            yes_no,
            [
                new question_node(question_data.question_text[2],yes_no,[scenario_1,scenario_2]),
                new question_node(question_data.question_text[2],yes_no,[scenario_3,scenario_4])
            ]
        ),
        new question_node(
            question_data.question_text[3],
            yes_no,[
                scenario_5,
                new question_node(
                    question_data.question_text[4],
                    [question_data.options_text[5],question_data.options_text[6]],[
                        new question_node(question_data.question_text[5],yes_no,[scenario_6,scenario_7]),
                        new question_node(question_data.question_text[5],yes_no,[scenario_8,scenario_9])
                    ]
                )
            ]
        ),
        scenario_10
    ]
);

module.exports = question_tree;