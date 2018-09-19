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

const question_text = [
    "Seleccione el caso de uso para la base de datos:",                   //0

    "¿La información que almacenará es crítica para su empresa?",   //1//Ejemplos

    "¿Manejarás más del millón de registros?",                   //2

    "¿Consiste en encontrar patrones o relaciones de" +
        " comportamiento?",                                     //3//para cambiar

    "¿Qué tipo de consulta se realizará más?",                   //4
    "¿Necesidad de manejar información en tiempo real?"          //5
];
const examples = [
    {
        title: "Ejemplo de Información Crítica",
        examples:[
            "Registro de ventas en una empresa comercial",
            "Registro de transacciones financieras en un banco"
        ],
    },
    {
        title: "Ejemplo de Información No Crítica",
        examples:[
            "Registro los estados de usuarios en una red social",
            "Registro de los comentarios de un post",
            "Guardar las conversaciones de un chatbot"
        ],
    }
];
/*
critico
* ej1: Registro de ventas en una empresa comercial
* ej2: registro de transacciones financieras en un banco
*
*no Critico
* ej1:Registro los estados de usuarios en una red social, registro de los comentarios de un post
* ej2: Guardar las conversaciones de un chatbot
* */
const options_text = [
    "Transaccional",            //0
    "Analítico",                //1
    "Manejo de Sesiones",       //2
    "Sí",                       //3
    "No",                       //4
    "Usaré todos los campos",   //5//para cambiar
    "Usaré campos específicos"  //6//para cambiar
];


const question_tree = {
    "El caso de uso de su base de datos es:":{
        "Transaccional":{
            "Las Transacciones deben mantener las propiedades ACID?":{
                "Sí":{"Manejarás más del millón de registros?":{
                        "Sí":[answers[4],answers[0]],
                        "No":[answers[0]],}
                },
                "No":{"Manejarás más del millón de registros?":{
                        "Sí":[answers[2]],
                        "No":[answers[0],answers[2]],}
                },
            },
        },
        "Analítico":{"Encontrar patrones o relaciones de comportamiento?":{
                "Sí":[answers[6]],
                "No":{"Qué tipo de consulta se realizará mas?":{
                        "Usaré todos los campos":{
                            "Necesidad de manejar información en tiempo real?":{
                                "Si":[answers[1],answers[4]],
                                "No":[answers[2],answers[5]],
                            }
                        },
                        "Usaré campos especificos":{
                            "Necesidad de manejar información en tiempo real?":{
                                "Si":[answers[4],answers[2]],
                                "No":[answers[5],answers[2]],
                            }
                        },
                    }},
            },},
        "Manejo de Sesiones":[answers[7]],
    },

};





module.exports = {question_tree,answers,question_text,options_text,examples};