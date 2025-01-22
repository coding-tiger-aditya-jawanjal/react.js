const Task = require("../models/task-model");

exports.addTask = async (req, res) => {
  const { title } = req.body;

  const task = new Task({
    title: title,
  });

  const newTask = await task.save();
  res.json({ msg: "Task is added !", newTask });
};


// CRUD - Create , Read , Update , Delete