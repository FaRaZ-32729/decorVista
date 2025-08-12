// controllers/reviewController.js
const reviewModel = require("../models/reviewSchema");

const createReview = async (req, res) => {
    try {
        const { productId, designerId, comment, rating } = req.body;

        if (!comment || !rating) {
            return res.status(400).json({ success: false, message: "Comment and rating are required" });
        }

        const review = await reviewModel.create({
            userId: req.authenticatedUser._id,
            productId,
            designerId,
            comment,
            rating
        });

        return res.status(201).json({ success: true, review });
    } catch (error) {
        return res.status(500).json({ message: error.message });
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
