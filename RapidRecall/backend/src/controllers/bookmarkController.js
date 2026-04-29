import Bookmark from "../models/Bookmark.js";


// Add Bookmark
export const addBookmark = async (req, res) => {
  try {
    const { questionId } = req.body;

    const alreadyExists = await Bookmark.findOne({
      user: req.user._id,
      question: questionId,
    });

    if (alreadyExists) {
      return res.status(400).json({
        message: "Question already bookmarked",
      });
    }

    const bookmark = await Bookmark.create({
      user: req.user._id,
      question: questionId,
    });

    res.status(201).json(bookmark);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get All Bookmarks
export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      user: req.user._id,
    }).populate("question");

    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Remove Bookmark
export const removeBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);

    if (!bookmark) {
      return res.status(404).json({
        message: "Bookmark not found",
      });
    }

    await bookmark.deleteOne();

    res.status(200).json({
      message: "Bookmark removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};