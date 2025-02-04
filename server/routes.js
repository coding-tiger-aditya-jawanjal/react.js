const express = require("express");
const {
  addTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("./controllers/task-controller");
const { signup } = require("./controllers/user-controller");

const router = express.Router();

// task routes
router.post(`/task`, addTask);
router.get(`/task`, getAllTasks);
router.get(`/task/:id`, getSingleTask);
router.delete(`/task/:id`, deleteTask);
router.put(`/task/:id`, updateTask);

// user routes
router.post(`/user/signup`, signup);

module.exports = router;
