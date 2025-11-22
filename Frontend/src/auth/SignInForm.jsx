import React from "react";
import logo from "../assets/logo.png";

const SignInForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">


      {/* --- Card --- */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg mb-18 border-0 shadow-none ">

        <h2 className="text-2xl font-semibold text-center text-neutral-700 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">
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

          {/* Forgot Password */}
          <div className="flex justify-end -mt-2">
            <a
              href="/forgot-password"
              className="text-sm text-cyan-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="font-semibold hover:underline text-cyan-600">
            Sign Up
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

export default SignInForm;
