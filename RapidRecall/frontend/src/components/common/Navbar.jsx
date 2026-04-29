import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          RapidRecall
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>

          <Link to="/register" className="hover:text-yellow-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;