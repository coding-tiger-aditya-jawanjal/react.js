const express = require("express");

const app = express();

const myPersonalFunction = (req, res) => {
  /*
    1. Take name , email & password from frontend
    2. save in MongoDB Database
    3. You will send response (signup successfull msg)
    */
  res.json({ msg: "Sign Up Successfull !" });
};

app.get(`/sign-up`, myPersonalFunction);

// app.get(`/`, function (req, res) {
//   res.json({ msg: "Home is running !" });
// });

app.listen(5000, () => {
  console.log(`Server is listening on PORT : 5000`);
});
