const express = require("express");
const { saveDesign, getUserSavedDesigns, deleteSavedDesign, getAllDesigns } = require("../controllers/savedDesignController");
const uploadFile = require("../middleware/multerMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", uploadFile, authMiddleware, saveDesign);
router.get("/:id", getUserSavedDesigns);
router.get("/", getAllDesigns);
router.delete("/:id", deleteSavedDesign);

module.exports = router; 