const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/productControllers");
const uploadFile = require("../middleware/multerMiddleware");
const router = express.Router()

router.post("/", uploadFile, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", uploadFile, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;