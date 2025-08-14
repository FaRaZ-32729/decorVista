const express = require("express");
const { getAllDesigns, createDesign, deleteDesign } = require("../controllers/designController");
const uploadFile = require("../middleware/multerMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", uploadFile, authMiddleware, createDesign);
// router.get("/:id", getUserSavedDesigns);
router.get("/", getAllDesigns);
router.delete("/:id", deleteDesign);

module.exports = router; 