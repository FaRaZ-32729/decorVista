const favouriteDesignModel = require("../models/favouriteDesignSchema");
const fs = require("fs");
const path = require("path");

const addFavouriteDesign = async (req, res) => {
    try {
        const { category, theme, colorScheme } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const imagePath = `/images/${req.file.filename}`;

        const design = await favouriteDesignModel.create({
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



const getUserFavDesigns = async (req, res) => {
    try {
        const { userId } = req.params;
        const designs = await favouriteDesignModel.find({ userId });
        return res.status(200).json({ success: true, designs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const deleteFavDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const design = await favouriteDesignModel.findById(id);
        if (!design) return res.status(404).json({ success: false, message: "Design not found" });

        await favouriteDesignModel.findByIdAndDelete(id);

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

module.exports = { addFavouriteDesign, getUserFavDesigns, deleteFavDesign };