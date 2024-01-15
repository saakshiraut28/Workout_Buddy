/** @format */

const mongoose = require("mongoose");

const loginUser = (req, res) => {
  res.status(200).json({ msg: "Login User" });
};

const signupUser = (req, res) => {
  res.status(200).json({ msg: "Sign Up User" });
};

module.exports = { loginUser, signupUser };
