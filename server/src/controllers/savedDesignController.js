const savedDesignModle = require("../models/savedDesignSchema");

// @desc    Save a design
const saveDesign = async (req, res) => {
    try {
        const { image, category, theme, colorScheme } = req.body;

        if (!image) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const design = await savedDesignModle.create({
            userId: req.authenticatedUser._id,
            image,
            category,
            theme,
            colorScheme
        });

        return res.status(201).json({ success: true, design });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get all saved designs for a user
const getUserSavedDesigns = async (req, res) => {
    try {
        const { userId } = req.params;
        const designs = await savedDesignModle.find({ userId });
        return res.status(200).json({ success: true, designs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a saved design
const deleteSavedDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const design = await savedDesignModle.findById(id);
        if (!design) return res.status(404).json({ success: false, message: "Design not found" });

        await SavedDesign.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Design deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { saveDesign, getUserSavedDesigns, deleteSavedDesign };
