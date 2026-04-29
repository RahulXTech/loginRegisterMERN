import React from "react";
import Navbar from "../components/common/Navbar";

const bookmarks = [
  {
    id: 1,
    question: "What is closure in JavaScript?"
  },
  {
    id: 2,
    question: "Difference between useEffect and useLayoutEffect?"
  }
];

const Bookmarks = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Saved Questions 📘
          </h1>

          <div className="space-y-4">
            {bookmarks.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="font-semibold text-lg">
                  {item.question}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;