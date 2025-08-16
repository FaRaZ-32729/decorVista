const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getDesignerProfile, getAllDesigners, createDesigner, updateDesigner } = require("../controllers/designerController");
const uploadFile = require("../middleware/multerMiddleware");
const router = express.Router();

router.post("/", authMiddleware, uploadFile, createDesigner);
router.put("/", authMiddleware, uploadFile, updateDesigner);

router.get("/:userId", getDesignerProfile);

router.get("/", getAllDesigners);

module.exports = router;
