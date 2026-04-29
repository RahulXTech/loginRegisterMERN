import React from "react";
import Navbar from "../components/common/Navbar";
import ResultCard from "../components/quiz/ResultCard";
import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">

          <ResultCard />

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link
              to="/quiz"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Retry Quiz
            </Link>

            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
            >
              Back to Dashboard
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ResultPage;