'use strict';
var sql = require('./db.js');

//Task object constructor
var Match = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Match.getAllTask = function (result) {
    sql.query("Select id, team1, team2, date, venue from cricket_matches", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
            //   console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Match.getEachTask = function (result) {
    sql.query("Select * from cricket_matches limit 1", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
            //   console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Match.getAllFields = function (result) {
    sql.query("Select id, team1 as 'Match', date, venue from cricket_matches limit 1", function (err, res, fields) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
            //   console.log('tasks : ', res);  

             result(null, fields);
            }
        });   
};

module.exports= Match;