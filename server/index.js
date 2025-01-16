const express = require("express");
const router = require("./routes");
const connectDB = require("./utils/db");

const app = express();

connectDB();
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server is running on PORT : 5000");
});
