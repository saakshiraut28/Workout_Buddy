/** @format */

import { useState } from "react";
import validator from "validator";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [error, setError] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password && !confirmpass) {
      setError(true);
      setErrmsg("All the fields are compulsory.");
    } else if (password !== confirmpass) {
      setError(true);
      setErrmsg("Password does not match.");
    } else if (!validator.isEmail(email)) {
      setError(true);
      setErrmsg("Invalid Email Id.");
    } else {
      try {
        const user = { email, password, confirmpass };
        const response = await fetch("/api/users/signup", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await response.json();

        if (!response.ok) {
          setErrmsg(json.error);
        }
        if (response.ok) {
          setEmail("");
          setPassword("");
          setConfirmpass("");
          setError(false);
          window.location.reload();
          console.log("New user signed up.");
          sessionStorage.setItem("logged_user", email);
        }
      } catch (error) {
        console.log("network error");
      }
    }
  };
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="max-w-xl bg-[#fff] py-20 px-5 md:px-10 space-y-10">
        <p className="font-bold text-xl">Sign Up</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => {
              setConfirmpass(e.target.value);
            }}
          />
          <div className="mx-auto flex w-full justify-center items-center ">
            <button className="bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
