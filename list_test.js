let list = require('./models/question_list');

console.log("Path:",list.path);
console.log("Path UI:",list.path_UI);
console.log("Current Node:",list.current_node);

list.Add_Node("El caso de uso de su base de datos es:","Analítico");
console.log("--------------------------------------------------------");

console.log("Path:",list.path);
console.log("Path UI:",list.path_UI);
console.log("Current Node:",list.current_node);
