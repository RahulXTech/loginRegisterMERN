import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubject: "",
  score: 0,
  currentQuestion: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },

    updateScore: (state, action) => {
      state.score = action.payload;
    },

    nextQuestion: (state) => {
      state.currentQuestion += 1;
    },

    resetQuiz: (state) => {
      state.selectedSubject = "";
      state.score = 0;
      state.currentQuestion = 0;
    },
  },
});

export const {
  setSubject,
  updateScore,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;




