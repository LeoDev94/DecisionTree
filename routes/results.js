var express = require('express');
var router = express.Router();
let DbGroupArray = require('../models/result_db');
let DB_Arbol = require('../util/db_config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/',function (req,res,next) {
    console.log("Received: ",req.body.jsonData);
    let jsonArray = JSON.parse(req.body.jsonData);
    let hasDB = req.body.opc_db;
    console.log(hasDB);
    let size=jsonArray.length;
    (DB_Arbol.list(function(err,body){
        if(!err){
            DB_Arbol.insert({_id:(body.total_rows*1+1).toString(),path: jsonArray,hasDB: hasDB},function(err,body){
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
    let db_gArray = new DbGroupArray();
    let lastNode = jsonArray[size-1];
    for(let i =0;i<lastNode._final_options.length;i++){
        let imgUri="../images/";
        imgUri += lastNode._final_options[i].split(' ').join('_');
        imgUri+=".png";
        db_gArray.Add(lastNode._final_options[i],i,imgUri);
    }
    console.log("SUCCESS");
    res.render('results',{db_groups: db_gArray.db_groupArray});
});

module.exports = router;