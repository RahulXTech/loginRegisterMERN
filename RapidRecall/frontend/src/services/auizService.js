import API from "./api";

export const getQuizQuestions = async (subject) => {
  const response = await API.get(
    `/quiz/questions?subject=${subject}&difficulty=medium`
  );

  return response.data;
};