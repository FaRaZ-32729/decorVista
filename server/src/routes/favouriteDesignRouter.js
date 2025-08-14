const express = require("express");
const uploadFile = require("../middleware/multerMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const { addFavouriteDesign, getUserFavDesigns, deleteFavDesign } = require("../controllers/favouriteDesignController");
const router = express.Router();

router.post("/", uploadFile, authMiddleware, addFavouriteDesign);
router.get("/:userId",authMiddleware , getUserFavDesigns);
router.delete("/:id", deleteFavDesign);

module.exports = router; 