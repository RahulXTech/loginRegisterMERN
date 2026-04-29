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

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Choose Your Subject 📘
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {subject}
                </h2>

                <button
                  onClick={() => handleStartQuiz(subject)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Start Quiz
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