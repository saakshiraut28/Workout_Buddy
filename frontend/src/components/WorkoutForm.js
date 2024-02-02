/** @format */

import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form
      className="wrokoutform  bg-white md:px-20 px-6 py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="title text-2xl font-bold py-5">Add a New Workout</h3>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Excersize Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={
            emptyFields.includes("title")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Load (in kg):</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={
            emptyFields.includes("load")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={
            emptyFields.includes("reps")
              ? "error"
              : "border-b-2 outline-none hover:border-black"
          }
        />
      </div>

      <button className="button my-4 py-2 px-6 rounded-sm font-bold text-md bg-[#2ec95e] hover:bg-[#6df897]">
        Add Workout
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
