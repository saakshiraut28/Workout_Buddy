/** @format */

const mongo = require("mongoose");

const Schema = mongo.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    loads: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongo.model("workout", workoutSchema);
