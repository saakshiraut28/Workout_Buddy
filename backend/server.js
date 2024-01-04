/** @format */
require("dotenv").config();

const express = require("express");
const mongo = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Initializing express App
const app = express();

// Create middleware kinda thing
app.use(express.json()); // Will help us to pass JSON object on request
app.use("/", (req, res, next) => {
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// Connect DB
mongo
  .connect(process.env.MONGo_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening to Port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
