
const question_data = require('../util/question_data');

const yes_no = [question_data.options_text[3],question_data.options_text[4]];//options of yes and no that will be used most

//DECLARATON OF MAIN TREE CLASS
class question_node{
    constructor(text,options,children,examples = null){
        this._text = text;
        this._options = options;
        this._children = children;
        this._father = null;
        this._examples = examples;
        if(children!==null)
            for(let i=0; i<this._children.length;i++){
                this._children[i].father = this;
            }
    }
    //Setters
    set father(value) {
        this._father = value;
    }
    set children(value) {
        this._children = value;
    }
    set examples(value) {
        this._examples = value;
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
    get examples() {
        return this._examples;
    }
}

//DECLARE ANSWER SCENARIOS HERE

let scenario_1 = new question_node("",[question_data.answers[1],question_data.answers[0]],null);//SQL in Memory, SQL
let scenario_2 = new question_node("",[question_data.answers[0]],null);                         //SQL
let scenario_3 = new question_node("",[question_data.answers[2]],null);                         //NoSQL Document
let scenario_4 = new question_node("",[question_data.answers[0],question_data.answers[2]],null);//SQL, NoSQL Document
let scenario_5 = new question_node("",[question_data.answers[6]],null);                         //NoSQL GraphDB
let scenario_6 = new question_node("",[question_data.answers[1],question_data.answers[4],question_data.answers[2]],null);//SQL in Memory, NoSQl Column In Memory, NoSQL Document
let scenario_7 = new question_node("",[question_data.answers[2],question_data.answers[5]],null);//NoSQL Document, NoSQL Column Store
let scenario_8 = new question_node("",[question_data.answers[4],question_data.answers[2]],null);//NoSQL Colum In Memory, NoSQL Document
let scenario_9 = new question_node("",[question_data.answers[5],question_data.answers[2]],null);//NoSQL Column Store, NoSQL Document
let scenario_10 = new question_node("",[question_data.answers[7]],null);                        //NoSQL Key Value



//CREATE MAIN TREE HERE
let question_tree = new question_node(
    question_data.question_text[0],//text
    [question_data.options_text[0],question_data.options_text[1],question_data.options_text[2]],//options
    //children
    [
        new question_node(
            question_data.question_text[1],//text
            yes_no,//options
            //children
            [
                new question_node(question_data.question_text[2],yes_no,[scenario_1,scenario_2]),
                new question_node(question_data.question_text[2],yes_no,[scenario_3,scenario_4])
            ],
            //examples
            question_data.all_examples[0]
        ),
        new question_node(
            question_data.question_text[3],//text
            yes_no,//options
            //children
            [
                scenario_5,
                new question_node(
                    question_data.question_text[4],
                    [question_data.options_text[5],question_data.options_text[6]],[
                        new question_node(question_data.question_text[5],yes_no,[scenario_6,scenario_7]),
                        new question_node(question_data.question_text[5],yes_no,[scenario_8,scenario_9])
                    ]
                )
            ],
            question_data.all_examples[1]
        ),
        scenario_10
    ]
);



module.exports = question_tree;