let db_data = require('../util/db_data');

class DbInfo {
    constructor(name){
        this._name=name;
        this._info=db_data.db_info[name];
        this._price=db_data.db_prices[name];
        this._site=db_data.db_sites[name];
    }
    get name(){
        return this._name;
    }
    get info(){
        return this._info;
    }
    get price(){
        return this._price;
    }
    get site(){
        return this._site;
    }
}

class DbGroup {

    constructor(db_group,index,imgUri){
        this._index=index;
        this._db_group=db_group;
        this._imgUri=imgUri;
        this._db_array=[];
        this.build();
    }
    get index(){
        return this._index;
    }
    get imgUri(){
        return this._imgUri;
    }
    get db_group(){
        return this._db_group;
    }
    get db_array(){
        return this._db_array;
    }
    build(){
        switch(this._db_group){
            case "SQL":
                this._db_array=[new DbInfo("Oracle"),new DbInfo("Microsoft SQL Server"),new DbInfo("MySQL")];
                break;
            case "SQL In Memory":
                this._db_array=[new DbInfo("Oracle In Memory"),new DbInfo("VoltDB"),new DbInfo("SAP Hana")];
                break;
            case "NoSQL Document":
                this._db_array=[new DbInfo("MongoDB"),new DbInfo("CouchDB"),new DbInfo("CouchBase")];
                break;
            case "NoSQL Column In Memory":
                this._db_array=[new DbInfo("HBase"),new DbInfo("Cassandra"),new DbInfo("MonetDB")];
                break;
            case "NoSQL Column Store":
                this._db_array=[new DbInfo("HBase"),new DbInfo("Cassandra"),new DbInfo("MariaDB Column Store")];
                break;
            case "NoSQL GraphDB":
                this._db_array=[new DbInfo("Neo4j"),new DbInfo("Datasax Enterprise GraphDB"),new DbInfo("OrientDB")];
                break;
            case "NoSQL Key Value":
                this._db_array=[new DbInfo("Redis"),new DbInfo("Memcached"),new DbInfo("Hazelcast")];
                break;
        }
    }
}
class DBGroupArray{
    constructor(){
        this._db_groupArray=[];
    }
    Add(db_group,index,imgUri){
        this._db_groupArray.push(new DbGroup(db_group,index,imgUri))
    }
    get db_groupArray(){
        return this._db_groupArray;
    }
}
module.exports = DBGroupArray;
