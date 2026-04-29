import React from "react";

const QuestionCard = ({
  question,
  options,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-xl font-bold mb-6">
        {question}
      </h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="w-full text-left border rounded-lg px-5 py-4 hover:bg-blue-50 hover:border-blue-500 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;