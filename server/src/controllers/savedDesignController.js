const savedDesignModle = require("../models/savedDesignSchema");
const fs = require("fs");
const path = require("path");

const saveDesign = async (req, res) => {
    try {
        const { category, theme, colorScheme } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const imagePath = `/images/${req.file.filename}`;

        const design = await savedDesignModle.create({
            userId: req.authenticatedUser._id,
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

// Get all designs for a specific user
const getUserSavedDesigns = async (req, res) => {
    try {
        const { userId } = req.params;
        const designs = await savedDesignModle.find({ userId });
        // const designs = await savedDesignModle.find().populate("userId", "name email");
        return res.status(200).json({ success: true, designs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get all designs (admin or public view)
const getAllDesigns = async (req, res) => {
    try {
        const designs = await savedDesignModle.find();;
        return res.status(200).json({ success: true, designs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteSavedDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const design = await savedDesignModle.findById(id);
        if (!design) return res.status(404).json({ success: false, message: "Design not found" });

        // Delete the design from DB
        await savedDesignModle.findByIdAndDelete(id);

        // Delete the image file from the server
        if (design.image) {
            const imagePath = path.join(__dirname, "..", design.image); // __dirname points to controllers folder
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

module.exports = { saveDesign, getUserSavedDesigns, getAllDesigns, deleteSavedDesign };
