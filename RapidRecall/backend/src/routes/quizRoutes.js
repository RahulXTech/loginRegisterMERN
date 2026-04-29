import express from "express";
import {
  addQuestion,
  getQuizQuestions,
  submitQuiz,
} from "../controllers/quizController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post(
  "/add-question",
  protect,
  adminOnly,
  addQuestion
);

router.get(
  "/questions",
  protect,
  getQuizQuestions
);

router.post(
  "/submit",
  protect,
  submitQuiz
);

export default router;