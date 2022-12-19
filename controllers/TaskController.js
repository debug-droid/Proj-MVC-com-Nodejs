const Task = require('../models/Task');

module.exports = class Taskcontroller {

    static createTask(req, res) {
        res.render('tasks/create');
    }

}