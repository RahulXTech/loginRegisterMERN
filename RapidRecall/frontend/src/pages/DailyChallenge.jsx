import React from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const DailyChallenge = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Daily Challenge 🔥
            </h1>

            <p className="text-gray-600 mb-6">
              Solve today’s special challenge and earn bonus points.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-3">
                Today's Topic: React Hooks
              </h2>

              <p className="text-gray-700">
                5 High-Level Interview Questions
              </p>
            </div>

            <Link
              to="/quiz"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Challenge
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default DailyChallenge;