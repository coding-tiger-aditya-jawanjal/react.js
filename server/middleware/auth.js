const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "You are un-Authorised !" });
    }

    const isTokenVerified = jwt.verify(token, "my-secret");

    if (!isTokenVerified) {
      return res.status(400).json({ msg: "Invalid Token !" });
    }

    const userExists = await User.findById(isTokenVerified.token);

    if (!userExists) {
      return res.status(400).json({ msg: "No such User !" });
    }

    req.user = userExists;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal Server Error in auth !", err: error.message });
  }
};

module.exports = auth;
