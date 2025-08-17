// controllers/reviewController.js
const reviewModel = require("../models/reviewSchema");

const createReview = async (req, res) => {
    try {
        const { productId, designerId, comment, rating } = req.body;

        if (!comment || !rating) {
            return res.status(400).json({ success: false, message: "Comment and rating are required" });
        }

        let review = await reviewModel.create({
            userId: req.authenticatedUser._id,
            productId,
            designerId,
            comment,
            rating
        });
        review = await review.populate("userId", "name email");
        return res.status(201).json({ success: true, review });
    } catch (err) {
        console.error("Create Review Error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Something went wrong");
    }
};

const getProductReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await reviewModel.find({ productId: id })
            .populate("userId", "name email");
        return res.status(200).json({ success: true, reviews });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getDesignerReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await reviewModel.find({ designerId: id })
            .populate("userId", "name email");
        return res.status(200).json({ success: true, reviews });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createReview, getProductReviews, getDesignerReviews };
