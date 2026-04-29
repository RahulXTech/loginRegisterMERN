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
      setSelectedAnswer("");
    }
  };

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  if (questions.length === 0) {
    return <h1 className="text-center mt-20">Loading Quiz...</h1>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                {selectedSubject} Quiz 🚀
              </h1>

              <p className="text-gray-600">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>

            <Timer />
          </div>

          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={handleSelect}
          />

          <div className="flex justify-end mt-8">
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default QuizPage;