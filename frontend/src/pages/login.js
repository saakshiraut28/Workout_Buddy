/** @format */

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="max-w-xl bg-[#fff] py-20 px-5 md:px-10 space-y-10">
        <p className="font-bold text-xl">Login</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full border-b-2 outline-none hover:border-black focus:border-black text-gray-700"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="mx-auto flex w-full justify-center items-center ">
            <button className="bg-[#1fb84e] hover:bg-[#47c850] px-5 py-2 rounded-lg text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
