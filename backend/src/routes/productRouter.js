const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/productControllers");
const router = express.Router()

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;