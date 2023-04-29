const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port:3307,
  password:'',
  database: 'ecommerce',
});
module.exports = pool.promise();