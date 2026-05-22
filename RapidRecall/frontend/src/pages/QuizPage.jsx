import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Timer from "../components/quiz/Timer";
import QuestionCard from "../components/quiz/QuestionCard";
import { getQuizQuestions } from "../services/quizService";

const QuizPage = () => {
  const selectedSubject =
    localStorage.getItem("selectedSubject") || "React";

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);
  const fetchQuestions = async () => {
    try {
      const data = await getQuizQuestions(selectedSubject);
      setQuestions(data);
    } catch (error) {
      console.log(error);
      alert("Failed to load quiz questions");
    }
  };

  const handleNext = () => {
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    console.log("Quiz Submitted");
  }
};
  const handlePrevious = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
    console.log(answer);
  };

  if (questions.length === 0) {
    return <h1 className="text-center mt-20">Loading Quiz...</h1>;
  }

  const currentQuestion = questions[currentIndex];

 return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-6">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">{selectedSubject}</h1>
            <p className="text-sm text-gray-500">
              Question {currentIndex + 1}/{questions.length}
            </p>
          </div>

          <button className="text-red-500 text-sm font-medium">
            Quit
          </button>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-md p-5">

          <h2 className="text-base font-medium mb-4 text-gray-800">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition 
                  ${
                    selectedAnswer === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex justify-between mt-6">
          <button
            className="bg-gray-300 px-6 py-2 rounded-lg cursor-pointer"
            onClick={() =>
              setCurrentIndex((prev) => Math.max(prev - 1, 0))
            }
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer"
          >
             {currentIndex === questions.length-1  ? "Submit" : "Next"}
          </button>
        </div>

      </div>
    </div>

    {/* Mobile Bottom Navigation */}
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-3 flex justify-between md:hidden">
      <button
        className="bg-gray-300 px-5 py-2 rounded-lg cursor-pointer"
        onClick={handlePrevious}
      >
        Previous
      </button>

      <button
  onClick={handleNext}
  className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer"
>
  {currentIndex === questions.length - 1 ? "Submit" : "Next"}
</button>
    </div>
  </>
)
};

export default QuizPage;