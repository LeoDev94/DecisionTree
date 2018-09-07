import Question_Node from 'question'

class Question_List{
    constructor(){
        this._array = [];
        this._path = [];
    }
    Cut_List(index){
        this._path.splice(index*1+1);
        this._array.splice(index*1+1);
    }
    Add_Node(question,answer){
        let size = this._array.length;
        let question_node = {};

        if(size === 0){
            question_node = new Question_Node(null,question,answer);
        }else {
            question_node = new Question_Node(this._array[size - 1], question, answer);
        }
        this._path.push({
                index: size,
                question: question_node.question,
                answer: question_node.answer,
            });

        this._array.push(question_node);
    }
    List_Size(){
        return this._array.length;
    }
    get path() {
        return this._path;
    }
}

module.exports = new Question_List();