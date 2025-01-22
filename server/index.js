const express = require("express");
const connectDB = require("./utils/db");
const router = require("./routes");

const app = express();
connectDB();

app.use(express.json());
app.use(`/api`, router);

app.listen(5000, () => {
  console.log(`Server is running on PORT : 5000`);
});
