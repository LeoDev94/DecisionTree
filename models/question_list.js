let question_tree = require('./question_tree');


class Question_List{
    constructor(){
        this._current_node = question_tree;
        this._path_UI = [{question: this._current_node.text,options:this._current_node.options}];
        this._path = [];
    }
    Cut_List(index){
        let before_size = this.Size();
        this._path.splice(index*1+1);
        this._path_UI.splice(index*1+1);
        for(let i = 0;i<before_size-index;i++){
            this._current_node = this._current_node.father;
        }
    }
    Add_Node(question,answer) {
        this._path.push({index: this.Size(), question: question, answer: answer});
        let node = this._current_node;
        let  aux = null;
        this._current_node.options.forEach(function (opt, ind) {
            if(opt === answer){
                aux = node.children[ind];
            }
        });
        this._current_node = null;
        this._current_node = aux;
        this._path_UI.push({question: this._current_node.text,options:this._current_node.options});
    }

    Size(){
        return this._path.length;
    }
    Check_Result(){

    }
    get path() {
        return this._path;
    }
    get current_node() {
        return this._current_node;
    }
    get path_UI() {
        return this._path_UI;
    }
}

module.exports = new Question_List();