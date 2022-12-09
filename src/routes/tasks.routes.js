const Task = require("..//models/task.model");

const routes = [
  {
    url: "/tasks",
    method: "GET",
    handler: async (request, reply) => {
      const tasks = await Task.find();
      return tasks;
    },
  },
  {
    url: "/add-task",
    method: "POST",
    handler: (request, reply) => {
      reply.send("add task");
    },
  },
  {
    url: "/modify-task/:id",
    method: "PUT",
    handler: (request, reply) => {
      reply.send("modify task");
    },
  },
  {
    url: "/delete-task/:id",
    method: "DELETE",
    handler: (request, reply) => {
      reply.send("delete task");
    },
  },
];

module.exports = routes;
