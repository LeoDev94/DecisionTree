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
    "Oracle": "La base de datos Oracle (Oracle DB) es un sistema de administración de bases de datos relacionales (RDBMS) de Oracle "+
    "Corporation. Originalmente desarrollado en 1977 por Lawrence Ellison y otros desarrolladores, Oracle DB es uno" +
    "de los motores de base de datos relacionales más confiables y ampliamente utilizados.",
    "Microsoft SQL Server": "Microsoft SQL Server es un sistema de administración de bases de datos relacionales, o RDBMS, que admite" +
    "una amplia variedad de procesamiento de transacciones, inteligencia empresarial y análisis" +
    "de aplicaciones en entornos de TI corporativos. Es uno de los tres líderes del mercado" +
    " de tecnologías de bases de datos.",
    "MySQL": "MySQL Enterprise Edition incluye el conjunto más completo de funciones avanzadas, herramientas de administración y" +
    "soporte técnico para alcanzar los niveles más altos de escalabilidad, seguridad , confiabilidad y tiempo de actividad de MySQL." +
    " Reduce el riesgo, el costo y la complejidad en el desarrollo, la implementación y la administración de" +
    "aplicaciones MySQL críticas para el negocio",
    "Oracle In Memory": "Oracle Database In-Memory brinda una arquitectura única de formato dual que permite" +
    "tablas que se representarán simultáneamente en la memoria utilizando el formato de fila tradicional y un" +
    "nuevo formato de columna en memoria. Oracle SQL Optimizer automáticamente enruta analítica" +
    "consultas al formato de columna y consultas OLTP al formato de fila, entregando de forma transparente" +
    "rendimiento del mejor de los dos mundos",
    "VoltDB": "VoltDB usa SQL, transacciones ACID y un modelo relacional. Estos fundamentos de base de datos probados" +
    "permiten que los desarrolladores aprovechen lo que saben. Combine el contexto, el análisis " +
    "en tiempo real y la sólida coherencia"+
    "para proporcionar las decisiones más sofisticadas en milisegundos",
    "SAP Hana": "HANA DB se aprovecha del bajo coste de la memoria principal (RAM), la capacidad del procesamiento" +
    " de datos de los procesadores multinúcleo y el acceso rápido a datos de unidades de estado sólido" +
    " con respecto a los discos duros tradicionales para ofrecer un mejor rendimiento de las aplicaciones" +
    " analíticas y transaccionales.",
    "MongoDB": "Cientos de organizaciones en todo el mundo usan nuestra edición comercial de la base de datos, llamada MongoDB" +
    "Enterprise Server, de las empresas Fortune 100 a las startups más ágiles",
    "CouchDB": "Apache CouchDB te permite acceder a tus datos donde los necesites. El Couch Replication Protocol" +
    "se implementa en una variedad de proyectos y productos que abarcan todos los entornos" +
    " informáticos imaginables, desde clusters de servidores distribuidos globalmente," +
    " pasando por teléfonos móviles hasta navegadores web",
    "CouchBase": "Construida con la tecnología NoSQL más potente, la plataforma de datos Couchbase se diseñó" +
    " sobre una base de código abierto para la empresa masivamente interactiva." +
    "Nuestra base de datos de interacción distribuida geográficamente brinda una agilidad y manejabilidad del desarrollador sin igual, "+
    "así como un rendimiento incomparable a cualquier escala, desde cualquier nube hasta el borde",
    "HBase": "Use Apache HBase cuando necesite acceso aleatorio, en tiempo real, de lectura / escritura a su Big Data." +
    "El objetivo de este proyecto es el alojamiento de tablas muy grandes: miles de millones de filas X millones de columnas" +
    "- sobre cúmulos de hardware básico",
    "Cassandra": "La base de datos Apache Cassandra es la elección correcta cuando se necesita escalabilidad y alta disponibilidad" +
    "sin comprometer el rendimiento. Escalabilidad lineal y probada tolerancia a fallas en los productos básicos" +
    "la infraestructura de hardware o en la nube lo convierten en la plataforma perfecta para datos de misión crítica." +
    "El soporte de Cassandra para replicar en múltiples centros de datos es el mejor en su clase, proporcionando" +
    "menor latencia para sus usuarios y la tranquilidad de saber que puede sobrevivir interrupciones regionales",
    "MonetDB": "MonetDB innova en todas las capas de un DBMS, por ejemplo, un modelo de almacenamiento basado" +
    " en la fragmentación vertical," +
    "una arquitectura moderna de ejecución de consultas ajustada a la CPU, " +
    "índices automáticos y autoajustables, optimización de consultas en tiempo de ejecución " +
    "y una arquitectura de software modular.",
    "MariaDB Column Store": "MariaDB ColumnStore está diseñado para escala de big data para procesar petabytes de datos," +
    "escalabilidad lineal y rendimiento excepcional con respuesta en tiempo real " +
    "a las consultas analíticas. Aprovecha los beneficios de I/O del almacenamiento en" +
    " columnas, la compresión," +
    "proyección justo a tiempo y particionamiento horizontal y vertical para" +
    " ofrecer un rendimiento tremendo al analizar grandes conjuntos de datos.",
    "Neo4j": "La plataforma de gráficos de Neo4j está específicamente optimizada para mapear, analizar," +
    " almacenar y recorrer redes de" +
    "datos conectados para revelar contextos invisibles y relaciones ocultas. Al mapear" +
    " de manera intuitiva los puntos de datos y las conexiones entre ellos, " +
    "Neo4j alimenta aplicaciones inteligentes en tiempo real que abordan" +
    " los retos empresariales más difíciles de la actualidad",
    "Datasax Enterprise GraphDB": "DSE Graph es un complemento de DSE que permite a las empresas identificar y analizar "+
    "relaciones ocultas entre datos conectados para crear aplicaciones potentes" +
    "para detección de fraude, cliente 360, redes sociales y recomendaciones en tiempo real",
    "OrientDB": "OrientDB permite a las organizaciones desbloquear el verdadero poder de las bases de" +
    " datos de gráficos sin tener que implementar" +
    "múltiples sistemas para manejar otros tipos de datos, lo que aumenta" +
    " el rendimiento y la seguridad a la vez que admite la escalabilidad",
    "Redis":
    "Redis es una tienda de estructura de datos en memoria de código abierto (con licencia de BSD), que se utiliza como base de datos," +
    "caché y agente de mensajes. Es compatible con estructuras de datos como cadenas, hashes, listas, conjuntos," +
    "conjuntos ordenados con consultas de rango, mapas de bits, hiperlogálogos e índices geoespaciales con consultas de radio." +
    "Redis tiene una replicación incorporada, secuencias de comandos Lua, desalojo LRU, transacciones y diferentes niveles de" +
    "persistencia en disco, y proporciona alta disponibilidad a través de Redis Sentinel y particiones automáticas con Redis Cluster.",

    "Memcached":
    "Memcached es un almacén de clave-valor en memoria para pequeños fragmentos de datos arbitrarios (cadenas, objetos)" +
    "a partir de los resultados de las llamadas a la base de datos, las llamadas API o la representación de páginas." +
    "Memcached es simple pero potente. Su diseño simple promueve la implementación rápida," +
    " la facilidad de desarrollo y resuelve muchos problemas que enfrentan los grandes cachés de datos.",
    "Hazelcast": "Hazelcast Jet® es el motor de procesamiento de Big Data de 3ra generación. Es una aplicación incrustable,"+
    "plataforma de computación distribuida para el procesamiento rápido de grandes conjuntos de datos. " +
    "La arquitectura Hazelcast Jet es de alto rendimiento y baja latencia, basada" +
    " en un motor paralelo de transmisión en paralelo que permite que las aplicaciones" +
    " de datos intensivos operen a velocidades cercanas al real.",
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

const database_types =[
    "SQL",
    "SQL In Memory",
    "NoSQL Document",
    "NoSQL Column In Memory",
    "NoSQL Column Store",
    "NoSQL GraphDB",
    "NoSQL Key Value"
];

const single_db = {
    name: "Oracle",
    price: 546.40,
    info:"",
    web:"",
};

const db_type_info = {
    name: "SQL",
    databases:[
        {
        name: "Oracle",
        price: 546.40,
        info: "",
        web: "",
        },
        "Microsoft SQL Server","MySQL"],
};


const all_db_types = [
    {
        name: "SQL",
        databases:[
            {
                name: "Oracle",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "Microsoft SQL Server",
                price: "",
                info:"",
                web:""
            },{
                name: "MySQL",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "SQL In Memory",
        databases:[
            {
                name: "Oracle In Memory",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "VoltDB",
                price: "",
                info:"",
                web:""
            },{
                name: "SAP Hana",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "NoSQL Document",
        databases:[
            {
                name: "MongoDB",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "CouchDB",
                price: "",
                info:"",
                web:""
            },{
                name: "CouchBase",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "NoSQL Column In Memory",
        databases:[
            {
                name: "Oracle",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "Microsoft SQL Server",
                price: "",
                info:"",
                web:""
            },{
                name: "MySQL",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "NoSQL Column Store",
        databases:[
            {
                name: "Oracle",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "Microsoft SQL Server",
                price: "",
                info:"",
                web:""
            },{
                name: "MySQL",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "NoSQL GraphDB",
        databases:[
            {
                name: "Oracle",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "Microsoft SQL Server",
                price: "",
                info:"",
                web:""
            },{
                name: "MySQL",
                price:"",
                web:""
            }
        ],
    },
    {
        name: "NoSQL Key Value",
        databases:[
            {
                name: "Oracle",
                price: 546.40,
                info:"",
                web:"",
            },
            {
                name: "Microsoft SQL Server",
                price: "",
                info:"",
                web:""
            },{
                name: "MySQL",
                price:"",
                web:""
            }
        ],
    }
];

class simple_db {
    constructor(name,price,info,web){
        this._name = name;
        this._price = price;
        this._info = info;
        this._web = web;
    }
}


const answer_database = {
    "SQL": ["Oracle","Microsoft SQL Server","MySQL"],
    "SQL In Memory": ["Oracle In Memory","VoltDB","SAP Hana"],
    "NoSQL Document": ["MongoDB","CouchDB","CouchBase"],
    "NoSQL Column In Memory": ["HBase","Cassandra","MonetDB"],
    "NoSQL Column Store": ["HBase","Cassandra","MariaDB Column Store"],
    "NoSQL GraphDB": ["Neo4j","Datasax Enterprise GraphDB","OrientDB"],
    "NoSQL Key Value": ["Redis","Memcached","Hazelcast"],
};


module.exports = {db_sites,db_info,db_prices,answer_database};