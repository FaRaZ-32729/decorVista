const express = require("express");
const { addToCart, getCart, updateCartItem, removeCartItem, clearCart } = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware"); // You need JWT authentication

const router = express.Router();

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.put("/", authMiddleware, updateCartItem);
router.delete("/", authMiddleware, removeCartItem);
router.delete("/:productId", authMiddleware, clearCart);

module.exports = router;
