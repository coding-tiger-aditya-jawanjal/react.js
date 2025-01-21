const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  mobile: Number,
  isIndian: Boolean,
});

const model = new mongoose.model("user", userSchema);
