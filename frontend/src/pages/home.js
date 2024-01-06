/** @format */

import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  // Function to fetch data
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkout();
  }, []);
  return (
    <>
      <Nav />
      <div className="container m-auto py-5 px-5 md:px-20 bg-[#ececec] h-screen">
        <WorkoutForm />
        <div className="content m-auto py-5">
          <span className="text-xl font-bold">Workouts: </span>
        </div>
        <div className="workouts text-black">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;