const express = require("express");
const { myFunction } = require("./controller/products-controller");
const router = express.Router();

router.get("/products", myFunction);

module.exports = router;
