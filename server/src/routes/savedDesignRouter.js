const express = require("express");
const { saveDesign, getUserSavedDesigns, deleteSavedDesign } = require("../controllers/savedDesignController");
const router = express.Router();

router.post("/", saveDesign);
//user id
router.get("/:id", getUserSavedDesigns);
// design id
router.delete("/:id", deleteSavedDesign);

module.exports = router; 