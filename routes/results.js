var express = require('express');
var router = express.Router();

const db_sites={
    "Oracle": "https://www.oracle.com/database/technologies/index.html",
    "Microsoft SQL Server": "https://www.microsoft.com/es-es/sql-server/sql-server-2017",
    "MySQL": "https://www.mysql.com/products/enterprise/",
    "Oracle In Memory": "https://www.oracle.com/database/technologies/in-memory.html",
    "VoltDB": "https://www.voltdb.com/product/",
    "SAP Hana": "https://www.sap.com/latinamerica/products/hana.html",
    "MongoDB": "https://www.mongodb.com/products/mongodb-enterprise-advanced?jmp=homepage",
    "CouchDB": "http://couchdb.apache.org/",
    "CouchBase": "https://www.couchbase.com/products/data-platform",
    "HBase": "https://hbase.apache.org/",
    "Cassandra": "http://cassandra.apache.org/",
    "MonetDB": "https://www.monetdb.org/Home",
    "MariaDB Column Store": "https://mariadb.com/kb/en/library/mariadb-columnstore/",
    "Neo4j": "https://neo4j.com/",
    "Datasax Enterprise GraphDB": "https://www.datastax.com/products/datastax-enterprise-graph",
    "OrientDB": "https://orientdb.com",
    "Redis": "https://redis.io/",
    "Memcached": "https://memcached.org/",
    "Hazelcast": "https://hazelcast.com/"
};

const db_info = {
    "Oracle": "Oracle database (Oracle DB) is a relational database management system (RDBMS) from the Oracle" +
                " Corporation. Originally developed in 1977 by Lawrence Ellison and other developers, Oracle DB is one" +
                " of the most trusted and widely-used relational database engines.",
    "Microsoft SQL Server": "Microsoft SQL Server is a relational database management system, or RDBMS, that supports" +
                            " a wide variety of transaction processing, business intelligence and analytics " +
                            "applications in corporate IT environments. It's one of the three market-leading" +
                            " database technologies.",
    "MySQL": "MySQL Enterprise Edition includes the most comprehensive set of advanced features, management tools and" +
                " technical support to achieve the highest levels of MySQL scalability, security, reliability," +
                " and uptime. It reduces the risk, cost, and complexity in developing, deploying, and managing" +
                " business-critical MySQL applications.",
    "Oracle In Memory": "Oracle Database In-Memory provides a unique dual-format architecture that enables" +
                        " tables to be simultaneously represented in memory using traditional row format and a" +
                        " new in-memory column format. The Oracle SQL Optimizer automatically routes analytic" +
                        " queries to the column format and OLTP queries to the row format, transparently delivering" +
                        " best-of-both-worlds performance.",
    "VoltDB": "VoltDB uses SQL, ACID transactions and a relational model. These proven database fundamentals " +
                "let developers leverage what they know. Combine context, real-time analytics and strong consistency" +
                " to provide the most sophisticated decisions in milliseconds.",
    "SAP Hana": "HANA DB se aprovecha del bajo coste de la memoria principal (RAM), la capacidad del procesamiento" +
                " de datos de los procesadores multinúcleo y el acceso rápido a datos de unidades de estado sólido" +
                " con respecto a los discos duros tradicionales para ofrecer un mejor rendimiento de las aplicaciones" +
                " analíticas y transaccionales.",
    "MongoDB": "Hundreds of organizations around the world use our commercial edition of the database, called MongoDB" +
                " Enterprise Server, from Fortune 100 enterprises to the most agile startups.",
    "CouchDB": "Apache CouchDB lets you access your data where you need it. The Couch Replication Protocol" +
                " is implemented in a variety of projects and products that span every imaginable computing" +
                " environment from globally distributed server-clusters, over mobile phones to web browsers.",
    "CouchBase": "Built with the most powerful NoSQL technology, the Couchbase Data Platform was architected" +
                    " on top of an open source foundation for the massively interactive enterprise. " +
                    "Our geo-distributed Engagement Database provides unmatched developer agility and manageability," +
                    " as well as unparalleled performance at any scale, from any cloud to the edge.",
    "HBase": "Use Apache HBase when you need random, realtime read/write access to your Big Data." +
                " This project's goal is the hosting of very large tables -- billions of rows X millions of columns" +
                " -- atop clusters of commodity hardware.",
    "Cassandra": "The Apache Cassandra database is the right choice when you need scalability and high availability" +
                    " without compromising performance. Linear scalability and proven fault-tolerance on commodity" +
                    " hardware or cloud infrastructure make it the perfect platform for mission-critical data." +
                    " Cassandra's support for replicating across multiple datacenters is best-in-class, providing" +
                    " lower latency for your users and the peace of mind of knowing that you can survive regional outages.",
    "MonetDB": "MonetDB innovates at all layers of a DBMS, e.g. a storage model based on vertical fragmentation," +
                " a modern CPU-tuned query execution architecture, automatic and self-tuning indexes, run-time query" +
                " optimization, and a modular software architecture.",
    "MariaDB Column Store": "MariaDB ColumnStore is designed for big data scaling to process petabytes of data," +
                            " linear scalability and exceptional performance with real-time response to analytics" +
                            " queries. It leverages the I/O benefits of columnar storage, compression," +
                            " just-in-time projection, and horizontal and vertical partitioning to deliver" +
                            " tremendous performance when analyzing large data sets.",
    "Neo4j": "Neo4j’s Graph Platform is specifically optimized to map, analyze, store and traverse networks of" +
                " connected data to reveal invisible contexts and hidden relationships. By intuitively mapping data" +
                " points and the connections between them, Neo4j powers intelligent, real-time applications that" +
                " tackle today's toughest enterprise challenges",
    "Datasax Enterprise GraphDB": "DSE Graph is an add-on to DSE that enables enterprises to identify and analyze" +
                                    " hidden relationships between connected data to build powerful applications " +
                                    "for fraud detection, customer 360, social networks, and real-time recommendations.",
    "OrientDB": "OrientDB allows organizations to unlock the true power of graph databases without having to deploy" +
                " multiple systems to handle other data types, which increases performance and security while" +
                " supporting scalability.",
    "Redis": "Redis is an open source (BSD licensed), in-memory data structure store, used as a database," +
                " cache and message broker. It supports data structures such as strings, hashes, lists, sets, " +
                "sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries." +
                " Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of" +
                " on-disk persistence, and provides high availability via Redis Sentinel and automatic" +
                " partitioning with Redis Cluster.",
    "Memcached": "Memcached is an in-memory key-value store for small chunks of arbitrary data (strings, objects) " +
                    "from results of database calls, API calls, or page rendering." +
                    "Memcached is simple yet powerful. Its simple design promotes quick deployment, ease" +
                    " of development, and solves many problems facing large data caches.",
    "Hazelcast": "Hazelcast Jet® is the 3rd Generation Big Data Processing Engine. It is an application embeddable," +
                    " distributed computing platform for fast processing of big data sets. The Hazelcast Jet" +
                    " architecture is high performance and low latency driven, based on a parallel, streaming" +
                    " core engine which enables data-intensive applications to operate at near real-time speeds.",
};
const db_prices = {
    "Oracle": 546.40,
    "Microsoft SQL Server": 606.88,
    "MySQL": 431.92,
    "Oracle In Memory": "Personalizado",
    "VoltDB": 460.00,
    "SAP Hana": 2030.32,
    "MongoDB": 123.04,
    "CouchDB": 148.24,
    "CouchBase": 532.00,
    "HBase": "Personalizado",
    "Cassandra": "Personalizado",
    "MonetDB": 388.00,
    "MariaDB Column Store": 166.96,
    "Neo4j": 316.00,
    "Datasax Enterprise GraphDB": "Personalizado",
    "OrientDB": 1532.80,
    "Redis": 187.84,
    "Memcached": 148.24,
    "Hazelcast": 219.52
};


class DbInfo {
    constructor(name){
        this._name=name;
        this._info=db_info[name];
        this._price=db_prices[name];
        this._site=db_sites[name];
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


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/',function (req,res,next) {
    console.log("Received: ",req.body.jsonData);
    let jsonArray = JSON.parse(req.body.jsonData);
    let size=jsonArray.length;
    let db_gArray=new DBGroupArray();
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