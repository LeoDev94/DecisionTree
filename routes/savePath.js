const dbConfig = {
    "apikey": "wxYEvRijZPQfModtNjbxnfna8pTDwt_Sm_tS7aov3nZp",
    "host": "1647891a-d405-4dd5-9f03-f822caebac2c-bluemix.cloudant.com",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:cloudantnosqldb:us-south:a/ae35b4fafc8aaf2cedf1f57604642d25:eed40a29-efb8-4306-9370-7dfe3701d6a9::",
    "iam_apikey_name": "auto-generated-apikey-370c2671-fc38-4460-9818-ed888164d80a",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/ae35b4fafc8aaf2cedf1f57604642d25::serviceid:ServiceId-d10c33b0-1b9b-4fe1-9461-47df67bb796a",
    "password": "a9fd5eaef0c0c8c278d6761da68e3d6e13465c4d16fc556a06c3d5eba7c35404",
    "port": 443,
    "url": "https://1647891a-d405-4dd5-9f03-f822caebac2c-bluemix:a9fd5eaef0c0c8c278d6761da68e3d6e13465c4d16fc556a06c3d5eba7c35404@1647891a-d405-4dd5-9f03-f822caebac2c-bluemix.cloudant.com",
    "username": "1647891a-d405-4dd5-9f03-f822caebac2c-bluemix"
}

var express = require('express');
var router = express.Router();
var Cloudant = require('@cloudant/cloudant');

var cloudant = Cloudant(dbConfig);
var dbname = 'arbol';
var db = cloudant.db.use(dbname);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("You're so cool");
});
router.post('/',function(req,res){
    //console.log('Body: '+JSON.stringify(req.body));
    //db.insert();

    var obj = {
        _id: "",
        path: "",
    };
    (db.list(function(err,body){
        if(!err){
            body.rows.forEach(function (doc) {
                console.log(doc);
            })
            /*obj.path = req.body;
            obj._id = (body.total_rows*1+1).toString();
            console.log("Total rows: ",body.total_rows);
            console.log("Data:",body);
            db.insert({_id:(body.total_rows*1+1).toString(),path: req.body},function(err,body){
                if(!err){
                    console.log(body);
                }
                else{
                    console.log(err);
                }

            });*/

        }else{
            console.log(err);
        }
    }));
    res.send("");
});

module.exports = router;