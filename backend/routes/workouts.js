/** @format */

const express = require("express");
const Workout = require("../models/workoutSchema");

const {
  createWorkout,
  getSingleWorkout,
  getWorkout,
} = require("../controllers/workoutcontrols");

const router = express.Router();

router.get("/", getWorkout);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout." });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE existing workout." });
});

module.exports = router;
