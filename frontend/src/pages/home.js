/** @format */

import React, { useEffect, useState } from "react";
import Nav from "../components/navbar";
import WorkoutDetails from "../components/workoutDetails";
import { Hero } from "./hero";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [userStatus] = useState(sessionStorage.getItem("logged_user") !== null);
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
      <div className="container m-auto py-5 px-5 md:px-20 h-screen">
        {userStatus ? (
          <>
            <div className="content m-auto py-5">
              <span className="text-xl font-bold">Workouts: </span>
            </div>
            <div className="workouts text-black">
              {workouts &&
                workouts.map((workout) => (
                  <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
          </>
        ) : (
          <>
            <Hero />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
