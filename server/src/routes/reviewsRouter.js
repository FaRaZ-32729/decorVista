const express = require("express");
const { createReview, getProductReviews, getDesignerReviews } = require("../controllers/reviewController");
const router = express.Router();

router.post("/", createReview);
router.get("/product", getProductReviews);
router.get("/designer", getDesignerReviews);

module.exports = router;