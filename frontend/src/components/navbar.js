/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkoutForm from "../components/workoutForm";

function Nav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div className="container bg-[#fff] m-auto py-5 px-5 md:px-20">
        <nav className="flex items-center justify-between content-between ">
          <div className="title text-xl font-bold">
            <span className="headLink">
              Workout <span className="text-[#1fb84e]">B</span>uddy
            </span>
          </div>
          <div
            className={
              open
                ? "title text-md font-bold text-[#1fb84e]"
                : "title text-md font-bold hover:text-[#1fb84e]"
            }
          >
            <Link onClick={handleLinkClick}>+ Add</Link>
          </div>
          {open ? (
            <div className="form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <WorkoutForm />
            </div>
          ) : (
            <div className="hidden">Hi</div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Nav;
