/** @format */

import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [loads, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  // Passing on the data to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, loads };

    const response = await fetch("api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
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
      window.location.reload();
      console.log("New workout added.");
    }
  };
  return (
    <div className="form max-w-xl bg-[#fff] py-5 px-5 md:px-10 ">
      <p className="text-lg font-bold text-gray-700">Fill up a new workout!!</p>
      <form className="space-y-4 py-5 mx-auto" onSubmit={handleSubmit}>
        <input
          className={
            emptyFields.includes("title")
              ? "w-full border-b-2 outline-none border-[#fa0000ba] text-gray-700"
              : "w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
          }
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={
            emptyFields.includes("reps")
              ? "w-full border-b-2 outline-none border-[#fa0000ba] text-gray-700"
              : "w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
          }
          placeholder="Reps"
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          className={
            emptyFields.includes("loads")
              ? "w-full border-b-2 outline-none border-[#fa0000ba] text-gray-700"
              : "w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
          }
          placeholder="Load (kg)"
          type="number"
          value={loads}
          onChange={(e) => setLoad(e.target.value)}
        />
        <button className="mx-auto bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 text-white rounded-lg">
          Create
        </button>
        <p className="w-full text-[#fa0000ba]">{error}</p>
      </form>
    </div>
  );
};

export default Form;
