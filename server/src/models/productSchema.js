const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
