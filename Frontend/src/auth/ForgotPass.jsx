import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle.js";

const ForgotPass = () => {
  useTitle("Forgot Password");

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendLink = () => {
    if (!email.trim()) {
      setError("Enter your email");
      return;
    }

    // Clear error if email is valid
    setError("");

    // Redirect to next page
    navigate("/reset-pass-link-sent");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      {/* --- Card --- */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg mb-18 border-0 shadow-none ">

        <p className="text-xl font-semibold text-center text-neutral-700 mb-6">
          Enter your email address to reset your password
        </p>

        <div className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-600 -mt-2">{error}</p>
          )}

          <button
            type="button"
            onClick={handleSendLink}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Send Reset Link
          </button>
        </div>

        <p className="text-center text-sm tex-neutral-500 mt-4 ">
          <Link to="/sign-in" className="font-semibold hover:underline text-cyan-600 cursor-pointer">
            Go Back
          </Link>
        </p>
      </div>

      {/* --- Bottom Logo + Text --- */}
      <div className="absolute bottom-4 flex flex-col items-center">
        <p className="text-sm text-neutral-600">Powered by</p>

        <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
      </div>
    </div>
  );
};

export default ForgotPass;
