import React from "react";
import Navbar from "../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const subjects = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Express.js",
];

const Subjects = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (subject) => {
    localStorage.setItem("selectedSubject", subject);
    navigate("/quiz");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Choose Subject
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Start your quiz in one click
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 active:scale-95"
              >
                {/* Icon */}
                <div className="text-3xl mb-3">📚</div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {subject}
                </h2>

                {/* Short Text */}
                <p className="text-gray-500 text-sm mb-4">
                  Practice {subject} questions quickly.
                </p>

                {/* Button */}
                <button
                  onClick={() => handleStartQuiz(subject)}
                  className="w-full py-2 rounded-lg text-white font-medium 
                  bg-gradient-to-r from-blue-500 to-indigo-600 
                  hover:from-blue-600 hover:to-indigo-700 
                  transition duration-300"
                >
                  Start Quiz →
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};
export default Subjects;