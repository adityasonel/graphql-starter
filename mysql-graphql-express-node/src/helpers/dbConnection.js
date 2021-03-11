const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "classicmodels",
    password: "classicmodels",
    database: "classicmodels",
    debug: false,
    connectionLimit: 10,
});

module.exports = pool;
