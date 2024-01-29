/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkoutForm from "../components/workoutForm";

function Nav() {
  const [open, setOpen] = useState(false);
  const [userStatus, setUserStatus] = useState(
    sessionStorage.getItem("logged_user") !== null
  );
  const handleLinkClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("logged_user");
    setUserStatus(false);
    window.location.reload();
  };

  return (
    <>
      <div className="absolute sticky top-0 container bg-[#fff] m-auto py-5 px-5 md:px-20 ">
        <nav className="flex items-center justify-between content-between ">
          <div className="title text-xl font-bold">
            <span className="headLink">
              Workout <span className="text-[#1fb84e]">B</span>uddy
            </span>
          </div>
          <div className="flex space-x-4 ">
            {!userStatus ? (
              <div className="text-base space-x-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            ) : (
              <>
                <button onClick={handleLogout}>Logout</button>
                <div
                  className={
                    open
                      ? "title text-base font-bold text-[#1fb84e]"
                      : "title text-base font-bold hover:text-[#1fb84e]"
                  }
                >
                  <Link onClick={handleLinkClick}>+ Add</Link>
                </div>
              </>
            )}
          </div>
          {open ? (
            <div className="absolute bg-[#0000009] w-full h-full left-0 top-16">
              <div className="form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                <p className="font-bold w-full text-right py-5 px-5">
                  <Link onClick={handleLinkClick}>X</Link>
                </p>
                <WorkoutForm />
              </div>
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
