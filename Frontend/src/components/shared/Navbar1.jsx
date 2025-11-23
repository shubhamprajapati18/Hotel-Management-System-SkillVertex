import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 shadow-sm py-4 px-6 flex items-center justify-between">
      
      {/* LEFT SIDE - PROJECT NAME */}
      <h1 className="text-xl font-bold text-neutral-700">
        Hotel Management System
      </h1>

      {/* RIGHT SIDE - SIGN IN BUTTON */}
      <Link
        to="/sign-in"
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer"
      >
        Sign In
      </Link>
      
    </nav>
  );
};

export default Navbar1;
