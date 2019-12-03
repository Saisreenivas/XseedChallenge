const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// var sql = require('./db.js');
const bodyParser = require('body-parser');

// const mysql = require('mysql');
// // connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'xseed_db'
// });
 
// // connect to database
// mc.connect();

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// var sql = "select "

var routes = require('./appRoutes');
routes(app);


// var sql = "select * from cricket_matches";
//     conn.query(sql, (err, res) => {
//         if (err) throw err;
//         // console.log("res" + JSON.stringify(res));
//         console.log("no error: " + sql);
//         app.get("/data", (req, response) => {
//             response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//             response.json(res);
//         });
//     });
// app.get("/express_backend", (req, res) => {
//     res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });