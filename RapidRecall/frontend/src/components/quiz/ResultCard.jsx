import React from "react";

const ResultCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Quiz Completed 🎉
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-5 text-center">
          <h3 className="text-gray-500 mb-2">
            Score
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            8 / 10
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-5 text-center">
          <h3 className="text-gray-500 mb-2">
            Accuracy
          </h3>
          <p className="text-2xl font-bold text-green-600">
            80%
          </p>
        </div>

        <div className="bg-red-50 rounded-lg p-5 text-center">
          <h3 className="text-gray-500 mb-2">
            Wrong Answers
          </h3>
          <p className="text-2xl font-bold text-red-600">
            2
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">
          Explanation Example
        </h3>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">
            Question:
          </span>{" "}
          Which concept makes React faster?
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">
            Correct Answer:
          </span>{" "}
          Virtual DOM
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">
            Explanation:
          </span>{" "}
          Virtual DOM improves performance by updating only
          changed parts of the UI instead of re-rendering
          the entire page.
        </p>
      </div>
    </div>
  );
};

export default ResultCard;