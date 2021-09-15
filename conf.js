const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6425',
    database: 'students'
})

module.exports = connection;