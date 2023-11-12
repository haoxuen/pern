const Pool = require("pg").Pool;

const pool = new Pool ({
    user:"postgres",
    port:"5444",
    password:"0809",
    host:"192.168.71.7",
    database:"perntodo",
});

module.exports = pool;