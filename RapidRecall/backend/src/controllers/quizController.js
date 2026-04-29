import Question from "../models/Question.js";
import Result from "../models/Result.js";


// Admin → Add Question
export const addQuestion = async (req, res) => {
  try {
    const {
      question,
      options,
      correctAnswer,
      explanation,
      subject,
      difficulty,
    } = req.body;

    const newQuestion = await Question.create({
      question,
      options,
      correctAnswer,
      explanation,
      subject,
      difficulty,
    });

    res.status(201).json({
      message : "question added successfully",
      newQuestion
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Student → Get Quiz Questions
export const getQuizQuestions = async (req, res) => {
  try {
    const { subject, difficulty } = req.query;

    const questions = await Question.aggregate([
      {
        $match: {
          subject,
          difficulty,
        },
      },
      {
        $sample: {
          size: 10,
        },
      },
      {
        $project: {
          correctAnswer: 0,
        },
      },
    ]);

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Student → Submit Quiz
export const submitQuiz = async (req, res) => {
  try {
    const { subject, answers } = req.body;

    let correctAnswers = 0;

    for (const item of answers) {
      const question = await Question.findById(item.questionId);

      if (
        question &&
        question.correctAnswer === item.selectedAnswer
      ) {
        correctAnswers++;
      }
    }

    const totalQuestions = answers.length;
    const accuracy = (correctAnswers / totalQuestions) * 100;
    const score = correctAnswers;

    const result = await Result.create({
      user: req.user._id,
      subject,
      totalQuestions,
      correctAnswers,
      score,
      accuracy,
    });

    res.status(201).json({
      message: "Quiz submitted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};