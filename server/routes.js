const express = require("express");
const {
  addTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("./controllers/task-controller");

const router = express.Router();

router.post(`/task`, addTask);
router.get(`/task`, getAllTasks);
router.get(`/task/:id`, getSingleTask);
router.delete(`/task/:id`, deleteTask);
router.put(`/task/:id`, updateTask);

module.exports = router;
