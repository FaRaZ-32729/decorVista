// const cartModel = require("../models/cartSchema");
const cartSchema = require("../models/cartSchema");
const productSchema = require("../models/productSchema");

// Add item to cart (create or update existing cart)
const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.authenticatedUser._id; // Assuming user is authenticated

        if (!productId || !quantity) {
            return res.status(400).json({ success: false, message: "Product ID and quantity are required" });
        }

        const product = await productSchema.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        let cart = await cartSchema.findOne({ userId });

        if (!cart) {
            cart = await cartSchema.create({
                userId,
                items: [{ productId, quantity }]
            });
        } else {
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
            await cart.save();
        }

        return res.status(200).json({ success: true, message: "Item added to cart", cart });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Get user cart
const getCart = async (req, res) => {
    try {
        const userId = req.authenticatedUser._id;
        const cart = await cartSchema.findOne({ userId }).populate("items.productId", "name price image");
        if (!cart) {
            return res.status(200).json({ success: true, cart: { items: [] } });
        }
        return res.status(200).json({ success: true, cart });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        if (!productId || quantity < 1) {
            return res.status(400).json({ success: false, message: "Invalid data" });
        }

        const cart = await cartSchema.findOneAndUpdate(
            { userId: req.authenticatedUser._id, "items.productId": productId },
            { $set: { "items.$.quantity": quantity } },
            { new: true }
        ).populate("items.productId", "name price image");

        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart item not found" });
        }

        res.json({ success: true, cart });
    } catch (err) {
        console.error("Error updating cart item:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Remove item from cart
const removeCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.authenticatedUser._id;

        let cart = await cartSchema.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();

        return res.status(200).json({ success: true, message: "Item removed from cart", cart });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Clear entire cart
const clearCart = async (req, res) => {
    try {
        const userId = req.authenticatedUser._id;
        await cartSchema.findOneAndDelete({ userId });
        return res.status(200).json({ success: true, message: "Cart cleared" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem,
    clearCart
};
