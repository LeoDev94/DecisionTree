
const answers = [
    "SQL",          //0
    "SQL In Memory",//1
    "NoSQL Document",//2
    "NoSQL Column",//3
    "NoSQL Column In Memory",//4
    "NoSQL Column Store",//5
    "NoSQL GraphDB",//6
    "NoSQL Key Value"//7
];


const questions = {
    "El caso de uso de su base de datos es:":{
        "Transaccional":"Las Transacciones deben mantener las propiedades ACID?",
        "Analítico":"Encontrar patrones o relaciones de comportamiento?",
        "Manejo de Sesiones":"",
    },
    "Las Transacciones deben mantener las propiedades ACID?":{
        "Sí":"Manejarás más del millón de registros?",
        "No":"Manejarás más del millón de registros?",
    },
    "Encontrar patrones o relaciones de comportamiento?":{
        "Sí":"",
        "No":"Qué tipo de consulta se realizará más?",
    },
    "Manejarás más del millón de registros?":{
        "Sí":"",
        "No":"",
    },
    "Qué tipo de consulta se realizará más?":{
        "Usaré todos los campos":"Necesidad de manejar información en tiempo real?",
        "Usaré campos especificos":"Necesidad de manejar información en tiempo real?",
    },
    "Necesidad de manejar información en tiempo real?":{
        "Sí":"",
        "No":"",
    },
};

class Tree_Node{
    constructor(prev_node=null,question="none",answer="none",index=0){
        this._prev_node=prev_node;
        this._question=question;
        this._answer=answer;
        this._index=index;
        if(this._prev_node==null){
            this._next_question="El caso de uso de su base de datos es:";
            this._answer_options=Object.keys(questions[this._next_question]);
        }else{
            this._next_question=questions[this._question][this._answer];
            if(this._next_question!=="")
                this._answer_options=Object.keys(questions[this._next_question]);
        }
        this._final_answers="";
    }

    Ask(){
        if (!this.Answer()){
            $(`.titulo_pregunta${this._index+1}`).html(this._next_question);
            $(`.opcion${this._index*2+1}`).html(this._answer_options[0]);
            $(`.opcion${this._index*2+2}`).html(this._answer_options[1]);
            if(this._prev_node==null){
                $('.opcionextra').html(this._answer_options[2]);
            }
            return false;
        }
        return true;
    }

    Answer(){
        if(this._next_question===""){
            $(`#options${this._index}`).hide();
            $('#numPregunta').html("Recomendación");
            let final_answer="";
            switch (this._prev_node._question){
                case "none":
                    final_answer=answers[7];
                    this._final_options=[final_answer];
                    break;
                case "El caso de uso de su base de datos es:":
                    final_answer=answers[6];
                    this._final_options=[final_answer];
                    break;
                case "Las Transacciones deben mantener las propiedades ACID?":
                    if(this._prev_node._answer==="Sí"){
                        if(this._answer==="Sí"){
                            this._final_options=[answers[1], answers[0]];
                            final_answer=`${answers[1]}, ${answers[0]}`;
                        }else{
                            this._final_options=[answers[0]];
                            final_answer=`${answers[0]}`;
                        }
                    }else{
                        if(this._answer==="Sí"){
                            this._final_options=[answers[2]];
                            final_answer=`${answers[2]}`;
                        }else{
                            this._final_options=[answers[0], answers[2]];
                            final_answer=`${answers[0]}, ${answers[2]}`;
                        }
                    }
                    break;
                case "Qué tipo de consulta se realizará más?":
                    if(this._prev_node._answer==="Usaré todos los campos"){
                        if(this._answer==="Sí"){
                            this._final_options=[answers[1], answers[4]];
                            final_answer=`${answers[1]}, ${answers[4]}`;
                        }else{
                            this._final_options=[answers[2], answers[5]];
                            final_answer=`${answers[2]}, ${answers[5]}`;
                        }
                    }else{
                        if(this._answer==="Sí"){
                            this._final_options=[answers[4], answers[2]];
                            final_answer=`${answers[4]}, ${answers[2]}`;
                        }else{
                            this._final_options=[answers[5], answers[2]];
                            final_answer=`${answers[5]}, ${answers[2]}`;
                        }
                    }
                    break;

            }
            //El caso de uso de su base de datos es:
            this._final_answers=final_answer;
            //$(`#options${this._index}`).after(this.WritePrices());
            //$(`.titulo_pregunta${this._index+1}`).html(this._final_answers);
            $(`.titulo_pregunta${this._index+1}`).hide();
            let results_table =`<table class="mx-auto text-center"><tr>`;
            for(let i =0 ;i<this._final_options.length;i++){
                results_table+=`<td><h3  class="px-2">${this._final_options[i]}</h3></td>`;
            }

            results_table+=`</tr><tr>`;
            for(let i =0 ;i<this._final_options.length;i++){
                results_table+=`<td><img class="img-fluid px-2" src="../images/${this._final_options[i].split(' ').join('_')}.png"></td>`;
            }
            results_table+=`</tr></table>`;
            $(`.titulo_pregunta${this._index+1}`).after(
                results_table +
                "<h3 class='text-center'>¿Su base de datos actual se encuentra entre las opciones recomendadas?</h3>" +
                "<div class='mx-auto text-center'>" +
                "<form id='pathData' method='post' action='/results'><input id='sendData' name='jsonData' type='hidden' value=''>" +
                "<input id='opc_db' name='opc_db' type='hidden' value=''>" +
                "<div class='row'>"+
                "<div class='col-md'><button id='Si' type='button' class='mx-3 w-50 btn-final btn btn-lg btn-danger'>Si</button></div>" +
                "<div class='col-md'><button id='No' type='button' class='mx-3 w-50 btn-final btn btn-lg btn-danger'>No</button></div>" +
                "</div></form></div>"
            );

            return true;
        }
        return false;
    }

}
