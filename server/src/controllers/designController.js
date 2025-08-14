const designModel = require("../models/designSchema");
const fs = require("fs");
const path = require("path");

const createDesign = async (req, res) => {
    try {
        const { category, theme, colorScheme } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const imagePath = `/images/${req.file.filename}`;

        const design = await designModel.create({
            image: imagePath,
            category,
            theme,
            colorScheme
        });

        return res.status(201).json({ success: true, design });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



// Get all designs (admin or public view)
const getAllDesigns = async (req, res) => {
    try {
        const designs = await designModel.find();;
        return res.status(200).json({ success: true, designs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const design = await designModel.findById(id);
        if (!design) return res.status(404).json({ success: false, message: "Design not found" });

        await designModel.findByIdAndDelete(id);

        if (design.image) {
            const imagePath = path.join(__dirname, "..", design.image);
            fs.unlink(imagePath, (err) => {
                if (err) console.error("Error deleting image:", err);
                else console.log("Image deleted:", imagePath);
            });
        }

        return res.status(200).json({ success: true, message: "Design deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createDesign, getAllDesigns, deleteDesign };
