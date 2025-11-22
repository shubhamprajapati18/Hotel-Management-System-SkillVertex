import React from "react";
import logo from "../assets/logo.png";
import useTitle from "../hooks/useTitle.js";

const SignUpForm = () => {
  useTitle("Sign Up");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">


      {/* --- Card --- */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg mb-18 border-0 shadow-none ">

        <h2 className="text-2xl font-semibold text-center text-neutral-700 mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm tex-neutral-500 mt-4">
          Already have an account?{" "}
          <a href="/sign-in" className="font-semibold hover:underline">
            <span className="text-cyan-600">Sign In</span>
          </a>
        </p>

      </div>


      {/* --- Bottom Logo + Text --- */}
      <div className="absolute bottom-4 flex flex-col items-center">
        <p className="text-sm text-neutral-600">Powered by</p>

        <img
          src={logo}
          alt="logo"
          className="h-12 w-auto object-contain"
        />

      </div>

    </div>
  );
};

export default SignUpForm;
