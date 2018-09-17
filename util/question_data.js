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
    "El caso de uso de su base de datos es:",                   //0

    "¿Las Transacciones deben mantener las propiedades ACID " +
    "(Atomicidad, Consistencia, Aislamiento y Durabilidad)?",   //1

    "¿Manejarás más del millón de registros?",                   //2

    "¿Consiste en encontrar patrones o relaciones de" +
        " comportamiento?",                                     //3

    "¿Qué tipo de consulta se realizará más?",                   //4
    "¿Necesidad de manejar información en tiempo real?"          //5
];

const options_text = [
    "Transaccional",            //0
    "Analítico",                //1
    "Manejo de Sesiones",       //2
    "Sí",                       //3
    "No",                       //4
    "Usaré todos los campos",   //5
    "Usaré campos específicos"  //6
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





module.exports = {question_tree,answers,question_text,options_text};