const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    designerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }
}, { timestamps: true });

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;
