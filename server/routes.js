const express = require("express");
const { addTask } = require("./controllers/task-controller");

const router = express.Router();

router.post(`/task`, addTask);

module.exports = router;
