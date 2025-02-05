const express = require("express");
const connectDB = require("./utils/db");
const router = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(`/api`, router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
