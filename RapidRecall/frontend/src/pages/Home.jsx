import React from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const features = [
  {
    title: "MCQ Practice",
    desc: "Practice topic-wise questions on JavaScript, React, Node.js, Express, HTML, CSS and more.",
    icon: "📘",
  },
  {
    title: "Mock Tests",
    desc: "Attempt real interview-style mock tests and improve your speed and confidence.",
    icon: "🧠",
  },
  {
    title: "Track Progress",
    desc: "Monitor your performance, score history, and identify weak areas easily.",
    icon: "📊",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 via-white to-white min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 pt-16 pb-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                #1 Platform for Technical Interview Preparation
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Crack Technical
                <span className="text-blue-600"> Interviews </span>
                Faster 🚀
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Master DSA, JavaScript, React, Node.js, Express, HTML,
                CSS and more with smart MCQ practice, mock tests, and
                progress tracking — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md text-center"
                >
                  Get Started Free
                </Link>

                <Link
                  to="/login"
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition duration-300 text-center"
                >
                  Login
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <span>✅ 1000+ Questions</span>
                <span>✅ Mock Interviews</span>
                <span>✅ Progress Dashboard</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Quick Preview
                </h2>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <p className="font-semibold text-gray-800">
                      JavaScript Quiz
                    </p>
                    <p className="text-sm text-gray-500">
                      50 Questions • Intermediate
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                    <p className="font-semibold text-gray-800">
                      React Mock Test
                    </p>
                    <p className="text-sm text-gray-500">
                      Live Score Tracking
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                    <p className="font-semibold text-gray-800">
                      Interview Analytics
                    </p>
                    <p className="text-sm text-gray-500">
                      Track your performance easily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Students Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Designed for students and developers who want to prepare
                smarter and get job-ready faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;