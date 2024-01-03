/** @format */

const Workout = require("../models/workoutSchema");

// Get all the workouts
const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ createAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout found" });
  }
  res.status(200).json({ msg: "Workout found" });
};

// Create a new Workout
const createWorkout = async (req, res) => {
  const { title, reps, loads } = req.body;
  try {
    const workout = await Workout.create({ title, reps, loads });
    // If the above object is successfully created
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a workout

// Update a workout

module.exports = { createWorkout, getSingleWorkout, getWorkout };
