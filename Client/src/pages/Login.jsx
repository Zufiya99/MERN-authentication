import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Logo"
            className="w-24 cursor-pointer"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>
          <p className="text-gray-600">
            {state === "Sign Up"
              ? "Create your account to get started"
              : "Login to your account"}
          </p>
        </div>

        {/* Form */}
        <form action="" className="space-y-4">
          {/* Full Name */}
          {state === "Sign Up" && (
            <div className="relative">
              <img
                src={assets.person_icon}
                alt="Person Icon"
                className="absolute top-2.5 left-3 w-5 text-gray-400"
              />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                required
                className="w-full py-2 pl-10 pr-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <img
              src={assets.mail_icon}
              alt="Mail Icon"
              className="absolute top-2.5 left-3 w-5 text-gray-400"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="w-full py-2 pl-10 pr-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <img
              src={assets.lock_icon}
              alt="Lock Icon"
              className="absolute top-2.5 left-3 w-5 text-gray-400"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 pl-10 pr-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <p
              onClick={() => navigate("/reset-password")}
              className="mb-4 text-gray-600 text-sm font-medium cursor-pointer hover:text-blue-500 transition duration-300"
            >
              Forgot password?
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {state === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {state === "Sign Up"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() =>
                setState(state === "Sign Up" ? "Login" : "Sign Up")
              }
              className="text-blue-500 hover:underline font-medium"
            >
              {state === "Sign Up" ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
