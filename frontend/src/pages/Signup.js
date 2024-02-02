/** @format */

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form
      className="signup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:px-20 px-6 py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="title text-2xl font-bold py-5">Sign Up</h3>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Email address:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="md:space-x-2 py-2">
        <label className="title text-md font-medium">Password:</label>
        <input
          className="border-b-2 outline-none hover:border-black"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        className="button my-4 py-2 px-6 rounded-sm font-bold text-md bg-[#2ec95e] hover:bg-[#6df897]"
        disabled={isLoading}
      >
        Sign up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
