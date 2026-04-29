import express from "express";
import {
  addBookmark,
  getBookmarks,
  removeBookmark,
} from "../controllers/bookmarkController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/add",
  protect,
  addBookmark
);

router.get(
  "/all",
  protect,
  getBookmarks
);

router.delete(
  "/remove/:id",
  protect,
  removeBookmark
);

export default router;