const express = require("express")
const route = express.Router();
const upload = require("../middlewares/multer.middleware");
const { uploadNotesPdf, getAllNotes, downloadNote } = require("../controllers/note.controller");

route.post("/upload", upload.single("file"), uploadNotesPdf);
route.get("/all", getAllNotes);
route.get("/download/:id", downloadNote);
module.exports = route;