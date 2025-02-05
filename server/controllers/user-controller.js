const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Name,Email & Password required !" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return res.status(400).json({ msg: "Error while hashing Password !" });
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(400).json({ msg: "Error while Sign Up !" });
    }

    const token = jwt.sign({ token: savedUser._id }, "my-secret", {
      expiresIn: "7d",
    });

    if (!token) {
      return res.status(400).json({ msg: "Error while generating Token !" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: false,
      sameSite: "Lax", // Strict , None , Lax
    });

    res
      .status(200)
      .json({ msg: "User Signed Up Successfully !", savedUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error !", err: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email & Password required !" });
    }

    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      return res.status(400).json({ msg: "Sign Up First !" });
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      emailExists.password
    );

    if (!isPasswordMatched) {
      return res.status(400).json({ msg: "Invalid credentials !" });
    }

    const token = jwt.sign({ token: emailExists._id }, "my-secret", {
      expiresIn: "7d",
    });

    if (!token) {
      return res.status(400).json({ msg: "Error while generating Token !" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: false,
      sameSite: "Lax", // Strict , None , Lax
    });

    res.status(200).json({ msg: "User Logged In Successfully !" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error !", err: error.message });
  }
};

exports.private = (req, res) => {
  res.status(200).json({ msg: "You are Authenticated User !", user: req.user });
};
/*

1. User will add Name , Email & Password in Form.

2. We will make POST request with fetch from Frontend.

3. We will get Data in Backend.

4. We will hash the password.

5. We are saving the data to MongoDB Database.

6. We are signing the JWT Token.

7. Stored the Token in httpOnly Cookie.

8. Sending response to frontend.

9. Frontend Shows toast notification or alert or etc to user.

*/
