/** @format */
require("dotenv").config();

const express = require("express");
const mongo = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// Initializing express App
const app = express();

// Create middleware kinda thing
app.use(express.json()); // Will help us to pass JSON object on request

app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect DB
mongo
  .connect(process.env.MONGo_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
