const taskController = require("../controllers/tasks.controller");

const routes = [
  {
    url: "/tasks",
    method: "GET",
    handler: taskController.getTasks,
  },
  {
    url: "/add-task",
    method: "POST",
    handler: taskController.addTask,
  },
  {
    url: "/modify-task/:id",
    method: "PUT",
    handler: taskController.modifyTask,
  },
  {
    url: "/delete-task/:id",
    method: "DELETE",
    handler: taskController.deleteTask,
  },
];

module.exports = routes;
