import React from "react";

const AddQuestionForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">
        Add New Question
      </h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Enter Question"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Option A"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Option B"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Option C"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Option D"
          className="w-full border rounded-lg px-4 py-3"
        />

        <select className="w-full border rounded-lg px-4 py-3">
          <option>Select Subject</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>Node.js</option>
        </select>

        <select className="w-full border rounded-lg px-4 py-3">
          <option>Select Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestionForm;