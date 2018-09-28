let arbol_db = require('../util/db_config');

function SavePath(path,hasDB){
    //let lastNode = path[path.length-1];
    (arbol_db.list(function(err,body){
        if(!err){
            arbol_db.insert({path: path,hasDB: hasDB},function(err,body){
                if(!err){
                    console.log(body);
                }
                else{
                    console.log(err);
                }
            });
        }else{
            console.log(err);
        }
    }));
}

module.exports = SavePath;