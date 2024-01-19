/** @format */

const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = (req, res) => {
  res.status(200).json({ msg: "Login User" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);
    // Create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
