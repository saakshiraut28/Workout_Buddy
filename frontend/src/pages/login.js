/** @format */

import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form
      className="login absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-20 py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="title text-xl font-bold py-5">Log In</h3>
      <tr>
        <label className="title text-md font-medium py-5">Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-b-2 outline-none"
        />
      </tr>
      <tr>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </tr>

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
