import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">
        Welcome to My Website
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-md">
        This is a simple home page created using React and Tailwind CSS.
        You can customize it according to your project needs.
      </p>
       
      <Link to="/login" className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
        Login
      </Link>

    </div>
  );
}

export default Home;
