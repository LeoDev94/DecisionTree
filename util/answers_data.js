const answers = [
    "Relacionales",          //0
    "Relacional In Memory",//1
    "No SQL Document Store",//2
    "No SQL Column",//3 NOT USED
    "No SQL Column Store In Memory",//4
    "No SQL Column Store",//5
    "No SQL Graph Database",//6
    "No SQL Key Value"//7
];
const img_routes = [
    {
        name:answers[0],
        img_path: "../images/SQL.png",
    },
    {
        name:answers[1],
        img_path: "../images/SQL_In_Memory.png",
    },
    {
        name:answers[2],
        img_path: "../images/NoSQL_Document.png",
    },
    {
        name:answers[4],
        img_path: "../images/NoSQL_Column_In_Memory.png",
    },
    {
        name:answers[5],
        img_path: "../images/NoSQL_Column_Store.png",
    },
    {
        name:answers[6],
        img_path: "../images/NoSQL_GraphDB.png",
    },
    {
        name:answers[7],
        img_path: "../images/NoSQL_Key_Value.png",
    },
];

function findImg(db_goup){
    for(let i=0;i<img_routes.length;i++){
        if(db_goup === img_routes[i].name){
            return img_routes[i].img_path;
        }
    }
    return "";
}

module.exports = {answers,findImg};