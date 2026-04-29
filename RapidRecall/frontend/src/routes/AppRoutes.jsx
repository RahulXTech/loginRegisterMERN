import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";
import Leaderboard from "../pages/Leaderboard";
import Bookmarks from "../pages/Bookmarks";
import DailyChallenge from "../pages/DailyChallenge";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Subjects from "../pages/Subjects";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/daily-challenge" element={<DailyChallenge />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/subjects" element={<Subjects />} />
    </Routes>
  );
};
export default AppRoutes;