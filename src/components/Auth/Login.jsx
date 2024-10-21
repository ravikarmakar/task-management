import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-3xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="outline-none text-lg border-2 bg-transparent mt-4 placeholder:text-gray-400 border-emerald-600 py-3 px-4 rounded-full"
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            className="outline-none text-lg border-2 bg-transparent mt-4 placeholder:text-gray-400 border-emerald-600 py-3 px-4 rounded-full"
            required
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button className="outline-none text-lg bg-emerald-600 border-emerald-600 py-3 px-24 mt-7 rounded-full cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
