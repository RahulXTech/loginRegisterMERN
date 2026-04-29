import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";

import notFound from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RapidRecall API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;