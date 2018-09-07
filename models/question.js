let question_data = require('../util/question_data');


export default class Question_Node {
    get tree() {
        return this._tree;
    }
    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = value;
    }
    get question() {
        return this._question;
    }
    set question(value) {
        this._question = value;
    }
    constructor(prev_node = null,question = "none", answer = "none"){
        this._prev_node = prev_node;
        this._question = question;
        this._answer = answer;
        this._results = [];
        if(prev_node == null){
            this._tree = question_data[question][answer];
        }else{
            this._tree = this._prev_node.tree[question][answer];
        }
        if(this._tree instanceof Array){
            this._results = this._tree;
        }else{
            this._next_question = Object.keys(this._tree)[0];
            this._next_options = Object.keys(this._tree[this._next_question]);
        }
    }
}
