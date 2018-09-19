let DbGroupArray = require('../models/result_UI');
let save_result = require('../models/result_DB');

exports.show_results = function (req,res) {
    let jsonArray = JSON.parse(req.body.jsonData);
    let hasDB = req.body.opc_db;
    let db_gArray = new DbGroupArray(jsonArray);
    save_result(jsonArray,hasDB);
    console.log("SUCCESS");
    res.render('results',{db_groups: db_gArray.db_groupArray});
};
