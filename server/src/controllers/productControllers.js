const productSchema = require("../models/productSchema");
const fs = require("fs");
const path = require("path");

const createProduct = async (req, res) => {
    try {
        const { name, category, brand, price, description } = req.body;

        if (!name || !category || !brand || !price || !description) {
            return res.status(400).json({
                success: false,
                message: "Name, Category, Brand, Price, and Description are required"
            });
        }

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Product image is required" });
        }

        const imageUrl = `/images/${req.file.filename}`;

        const product = await productSchema.create({
            name,
            category,
            brand,
            price,
            description,
            image: imageUrl
        });

        return res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            product
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createProduct };


const getAllProducts = async (req, res) => {
    try {
        const products = await productSchema.find();
        return res.status(200).json({ success: true, products });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findById(id);
        if (!product) return res.status(404).json({ success: false, message: "Product Not Found" });
        return res.status(200).json({ success: true, product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product Not Found" });
        }

        // Update text fields
        product.name = req.body.name || product.name;
        product.category = req.body.category || product.category;
        product.brand = req.body.brand || product.brand;
        product.price = req.body.price || product.price;
        product.description = req.body.description || product.description;

        // Handle image update
        if (req.file) {
            // Delete old image if exists
            if (product.image) {
                const oldImagePath = path.join(__dirname, "..", product.image); // product.image = "/images/filename.png"
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }
            // Save new image path
            product.image = `/images/${req.file.filename}`;
        }

        await product.save();

        return res.status(200).json({ success: true, message: "Product Updated Successfully", product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchema.findById(id);
        if (!product) return res.status(404).json({ success: false, message: "Product Not Found" });

        await productSchema.findByIdAndDelete(id);

        if (product.image) {
            const imagePath = path.join(__dirname, "..", product.image);
            fs.unlink(imagePath, (error) => {
                if (error) console.log(error)
                // if (err) {
                //     console.error("Error deleting image:", err);
                // } else {
                //     console.log("Image deleted:", imagePath);
                // }
            });
        }

        return res.status(200).json({ success: true, message: "Product Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
