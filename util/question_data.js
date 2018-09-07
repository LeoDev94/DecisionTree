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

const question_tree_2 = {
    "El caso de uso de su base de datos es:":["Transaccional","Analítico","Manejo de Sesiones"],

};

const question_tree = {
    "El caso de uso de su base de datos es:":{
        "Transaccional":{
            "Las Transacciones deben mantener las propiedades ACID?":{
                "Sí":{"Manejarás mas del millón de registros?":{
                        "Sí":[answers[4],answers[0]],
                        "No":[answers[0]],}
                },
                "No":{"Manejarás mas del millón de registros?":{
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

module.exports = {question_tree};