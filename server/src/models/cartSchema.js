const mongoose = require("mongoose");
const user = require("./userSchema");
const products = require("./productSchema")
const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
