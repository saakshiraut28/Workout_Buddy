/** @format */

const mongo = require("mongoose");

const Schema = mongo.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    loads: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongo.model("workout", workoutSchema);
