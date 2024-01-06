/** @format */

import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  // Passing on the data to the DB
  const handleSubmit = (e) => {};
  return (
    <div className="form max-w-xl bg-[#fff] py-5 px-5 md:px-10">
      <p className="text-lg font-bold text-gray-700">Fill up a new workout!!</p>
      <form className="space-y-4 py-5 mx-auto" onSubmit={handleSubmit}>
        <input
          className="w-full border-b-2 outline-none hover:border-black text-gray-700"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full border-b-2 outline-none hover:border-black text-gray-700"
          placeholder="Reps"
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          className="w-full border-b-2 outline-none hover:border-black text-gray-700"
          placeholder="Load (kg)"
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />

        <button
          className="mx-auto bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 text-white rounded-lg"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
