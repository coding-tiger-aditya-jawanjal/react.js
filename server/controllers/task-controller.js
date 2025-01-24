const Task = require("../models/task-model");

exports.addTask = async (req, res) => {
  const { title } = req.body;

  const task = new Task({
    title: title,
  });

  const newTask = await task.save();
  res.json({ msg: "Task is added !", newTask });
};

exports.getAllTasks = async (req, res) => {
  const data = await Task.find().sort({ createdAt: -1 }).limit(3).skip(2);
  res.status(200).json({ msg: "All tasks fetched !", data });
};

exports.getSingleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  res.status(200).json({ msg: "Single task fetched !", task });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.status(200).json({ msg: "task Deleted !" });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { newTitle } = req.body;

  await Task.findByIdAndUpdate(
    id,
    { $set: { title: newTitle, isCompleted: true } },
    { new: true }
  );

  res.status(201).json({ msg: "task updated !" });
};

// CRUD - Create , Read , Update , Delete
