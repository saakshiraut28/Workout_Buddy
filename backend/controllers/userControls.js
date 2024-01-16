/** @format */

const User = require("../models/userSchema");

const loginUser = (req, res) => {
  res.status(200).json({ msg: "Login User" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
