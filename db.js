const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "college",
    password : "harsh",
    port : 5432,
});

module.exports  = pool;


