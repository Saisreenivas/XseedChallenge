'use strict';
module.exports = (app)=>{
    var matchesList = require('./appController');

    app.route('/matches')
    .get(matchesList.list_all_matches);
    app.route('/matches_headings')
    .get(matchesList.list_all_fields);
    app.route('/matches_each')
    .get(matchesList.list_one_match);
//     .post(todoList.create_a_task);
   
//    app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
//     };
}