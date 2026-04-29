import React from "react";

const questions = [
  {
    id: 1,
    question: "What is Virtual DOM?",
    subject: "React",
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "What is closure?",
    subject: "JavaScript",
    difficulty: "Hard"
  }
];

const QuestionTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Manage Questions
      </h2>

      <div className="space-y-4">
        {questions.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-5 flex flex-col md:flex-row justify-between gap-4"
          >
            <div>
              <h3 className="font-semibold">
                {item.question}
              </h3>

              <p className="text-gray-600">
                {item.subject} • {item.difficulty}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionTable;