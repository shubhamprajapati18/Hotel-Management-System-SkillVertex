import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import useTitle from "../hooks/useTitle.js";
import { AuthContext } from "../context/AuthContext";

const SignInForm = () => {
  useTitle("Sign In");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email.trim(), password);
      navigate("/", { replace: true }); // go to home after login
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg mb-18 border-0 shadow-none ">
        <h2 className="text-2xl font-semibold text-center text-neutral-700 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <div className="flex justify-end -mt-2">
            <Link to="/forgot-password" className="text-sm text-cyan-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" className="font-semibold hover:underline text-cyan-600">
            Sign Up
          </Link>
        </p>
      </div>

      <div className="absolute bottom-4 flex flex-col items-center">
        <p className="text-sm text-neutral-600">Powered by</p>
        <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
      </div>
    </div>
  );
};

export default SignInForm;
