const Note = require("../models/Note.model");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { uploadPDF } = require("../services/cloudinary.service");

async function uploadNotesPdf(req, res) {
  try {
    const { title, description, subject, college, price } = req.body;

    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = verifyToken.id;

    if (!title || !req.file) {
      return res.status(400).json({
        message: "Title and PDF file are required",
      });
    }

    // Upload using service
    const fileUrl = await uploadPDF(req.file.path);

    // Delete local file
    fs.unlinkSync(req.file.path);

    // Save in DB
    const newNote = await Note.create({
      title,
      description,
      subject,
      college,
      price,
      fileUrl: fileUrl,
      uploadedBy: userId,
    });

    return res.status(201).json({
      message: "PDF uploaded successfully",
      note: newNote,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error during PDF upload",
      error: error.message,
    });
  }
}




async function getAllNotes(req, res) {
  try {
    const notes = await Note.find()
      .populate("uploadedBy", "name email") 
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Notes fetched successfully",
      total: notes.length,
      notes,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error fetching notes",
      error: error.message,
    });
  }
}

async function downloadNote(req, res) {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    note.downloads += 1;
    await note.save();

    return res.status(200).json({
      message: "Download link generated",
      fileUrl: note.fileUrl,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error downloading note",
      error: error.message,
    });
  }
}

module.exports = { uploadNotesPdf, getAllNotes, downloadNote};