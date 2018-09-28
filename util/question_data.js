
const question_text = [
    "Seleccione el caso de uso para la base de datos:",                   //0

    "¿La información que almacenará es crítica para su empresa?",   //1//Ejemplos

    "¿Manejarás más del millón de registros?",                   //2

    "¿Consiste en encontrar patrones o relaciones de" +
        " comportamiento? Por ejemplo: Sistema de recomendaciones o" +
    "                Detección de fraudes",                                     //3//para cambiar

    "¿Qué tipo de consulta se realizará más?",                   //4
    "¿Necesidad de manejar información en tiempo real?"          //5
];

const all_examples = [
    [
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
    ],
    [
        {
            title: "Ejemplos",
            examples:[
                "Sistema de recomendaciones",
                "Detección de fraudes"
            ],
        }
    ]
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

const options_text = [
    "Transaccional",            //0
    "Analítico",                //1
    "Manejo de Sesiones",       //2
    "Sí",                       //3
    "No",                       //4
    "Usaré todos los campos",   //5//para cambiar
    "Usaré campos específicos"  //6//para cambiar
];


module.exports = {question_text,options_text,all_examples};