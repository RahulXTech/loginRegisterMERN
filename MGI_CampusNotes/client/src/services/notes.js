import API from "./api";

export const getAllNotes = () => API.get("/notes/all");

export const downloadNote = (id) => API.get(`/notes/download/${id}`);