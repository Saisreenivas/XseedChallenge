'user strict';

var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "xseed_db"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conn;