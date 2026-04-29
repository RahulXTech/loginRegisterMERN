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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your Subject 📘
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Select your favorite subject and start improving your skills with
              interactive quizzes designed for better learning.
            </p>
          </div>

          {/* Subject Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 hover:-translate-y-2"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition duration-300">
                  📚
                </div>

                {/* Subject Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {subject}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Test your knowledge in {subject} with smart questions,
                  detailed explanations, and real learning progress tracking.
                </p>

                {/* Button */}
                <button
                  onClick={() => handleStartQuiz(subject)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
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