const express = require("express");
const {
  addTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("./controllers/task-controller");
const { signup, login, private } = require("./controllers/user-controller");
const auth = require("./middleware/auth");

const router = express.Router();

// task routes
router.post(`/task`, addTask);
router.get(`/task`, getAllTasks);
router.get(`/task/:id`, getSingleTask);
router.delete(`/task/:id`, deleteTask);
router.put(`/task/:id`, updateTask);

// user routes
router.post(`/user/signup`, signup);
router.post(`/user/login`, login);

router.get("/private", auth, private);

module.exports = router;
