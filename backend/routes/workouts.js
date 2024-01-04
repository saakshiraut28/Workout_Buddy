/** @format */

const express = require("express");
const Workout = require("../models/workoutSchema");

const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutcontrols");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;