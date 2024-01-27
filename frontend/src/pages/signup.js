/** @format */

import { useState } from "react";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmpassword) {
      setError("All the fields are compulsory.");
    }
    if (password !== confirmpassword) {
      setError("Password does not match.");
    }
    if (!validator.isEmail(email)) {
      setError("Enter a valid email address.");
    }
    if (!validator.isStrongPassword(password)) {
      setError("Enter a strong password.");
    }
    try {
      const user = { email, password, confirmpassword };
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(false);
        window.location.reload();
        console.log("New user signed in.");
        sessionStorage.setItem("logged_user", email);
      }
    } catch (error) {
      console.log("network error");
    }
  };
  return (
    <>
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
              value={email}
            />
            <input
              className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <input
              className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmpassword}
            />
            <div className="mx-auto flex w-full justify-center items-center ">
              <button className="bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 rounded-lg text-white">
                Sign Up
              </button>
            </div>
            {error ? <p>{error}</p> : <p></p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
