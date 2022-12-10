const Task = require("..//models/tasks.model");

const getTasks = async (request, reply) => {
  const tasks = await Task.find();
  return tasks;
};

const addTask = async (request, reply) => {
  const newTask = new Task(request.body);
  await newTask.save();
  reply.code(201).send(newTask);
};

const modifyTask = async (request, reply) => {
  const task = await Task.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
  reply.code(200).send(task);
};

const deleteTask = async (request, reply) => {
  await Task.findByIdAndDelete(request.params.id);
  reply.code(204).send();
};

module.exports = {
  getTasks,
  addTask,
  modifyTask,
  deleteTask,
};
