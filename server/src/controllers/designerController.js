const designerModel = require("../models/designerSchema");

const createDesigner = async (req, res) => {
    try {
        const userId = req.authenticatedUser._id;

        const {
            specialization,
            availableTimeSlots,
            phoneNumber,
            yearsOfExperience,
            about
        } = req.body;

        let imagePath = req.file ? `/images/${req.file.filename}` : null;

        if (!imagePath) {
            return res.status(400).json({ message: "Image is required" });
        }

        const existingDesigner = await designerModel.findOne({ userId });
        if (existingDesigner) {
            return res.status(400).json({ message: "Profile already exists" });
        }

        const designer = await designerModel.create({
            userId,
            specialization,
            availableTimeSlots: availableTimeSlots ? JSON.parse(availableTimeSlots) : [],
            phoneNumber,
            yearsOfExperience,
            about,
            image: imagePath
        });

        return res.status(201).json({ message: "Profile created", designer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create profile" });
    }
};


const updateDesigner = async (req, res) => {
    try {
        const userId = req.authenticatedUser._id;

        const {
            specialization,
            availableTimeSlots,
            phoneNumber,
            yearsOfExperience,
            about
        } = req.body;

        let imagePath = req.file ? `/images/${req.file.filename}` : null;

        const designer = await designerModel.findOne({ userId });
        if (!designer) {
            return res.status(404).json({ message: "Profile not found" });
        }

        designer.specialization = specialization || designer.specialization;
        designer.availableTimeSlots = availableTimeSlots ? JSON.parse(availableTimeSlots) : designer.availableTimeSlots;
        designer.phoneNumber = phoneNumber || designer.phoneNumber;
        designer.yearsOfExperience = yearsOfExperience || designer.yearsOfExperience;
        designer.about = about || designer.about;
        designer.image = imagePath || designer.image;

        await designer.save();

        return res.status(200).json({ message: "Profile updated", designer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update profile" });
    }
};


// Get a specific designer profile
const getDesignerProfile = async (req, res) => {
    try {
        const designer = await designerModel
            .findOne({ userId: req.params.userId })
            .populate("userId", "name email role");

        if (!designer) {
            return res.status(404).json({ message: "Designer profile not found" });
        }

        if (designer.userId.role !== "designer") {
            return res.status(403).json({ message: "Not authorized as designer" });
        }

        res.json(designer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all designers
const getAllDesigners = async (req, res) => {
    try {
        const designers = await designerModel
            .find()
            .populate({
                path: "userId",
                match: { role: "designer" },
                select: "-password",
            })
            .lean();

        const filtered = designers.filter(d => d.userId !== null);

        res.json(filtered);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createDesigner,
    updateDesigner, 
    getDesignerProfile,
    getAllDesigners,
};
