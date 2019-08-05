const mysql = require('mysql')

connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'wjssbdhQk3',
    port:3306,
    database:'pf1'
})

module.exports = {
    connection
}