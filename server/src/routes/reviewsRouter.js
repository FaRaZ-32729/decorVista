const express = require("express");
const { createReview, getProductReviews, getDesignerReviews } = require("../controllers/reviewController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createReview);
router.get("/product/:id", getProductReviews);
router.get("/designer/:id", getDesignerReviews);

module.exports = router;