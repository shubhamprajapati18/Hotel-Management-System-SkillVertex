import React from "react";
import logo from "../assets/logo.png";

const LinkSent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">


      {/* --- Card --- */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg mb-18 border-0 shadow-none ">

        <p className="text-xl font-semibold text-center text-neutral-700 mb-6">
          We sent you an email with a link to reset your password.
        </p>

        <p className="text-center text-sm tex-neutral-500 mt-4">
          <a href="/sign-in" className="font-semibold hover:underline">
            <span className="text-cyan-600">Go Back</span>
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

export default LinkSent;
