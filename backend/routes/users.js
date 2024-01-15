/** @format */

const express = require("express");

const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userControls");

// Login
router.post("/login", loginUser);

// Sign Up
router.post("/signup", signupUser);

module.exports = router;
