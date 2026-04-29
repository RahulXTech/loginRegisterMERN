import express from "express";
import {
  getDashboardStats,
  getLeaderboard,
} from "../controllers/dashboardController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  getDashboardStats
);

router.get(
  "/leaderboard",
  protect,
  getLeaderboard
);

export default router;