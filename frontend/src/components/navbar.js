/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="container bg-[#fff] m-auto py-5 px-5 md:px-20">
        <nav className="flex items-center justify-between content-between ">
          <div className="title text-xl font-bold">
            <span className="headLink">
              Workout <span className="text-[#1fb84e]">B</span>uddy
            </span>
          </div>
          <div className="title text-md font-bold hover:text-[#1fb84e]">
            <Link>+ Add</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
