/** @format */
const mongoose = require("mongoose");
const Workout = require("../models/workoutSchema");

// Get all the workouts
const getWorkouts = async (req, res) => {
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
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout found" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout found" });
  }
  res.status(200).json({ workout });
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
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout found" });
  }

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(workout);
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout found" });
  }
  const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!workout) {
    return res.status(404).json({ error: "No workout found" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
