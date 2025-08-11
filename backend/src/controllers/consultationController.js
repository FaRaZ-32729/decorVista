const consultationModel = require("../models/consultationSchema");

// @desc    Create a consultation (Homeowner)
const createConsultation = async (req, res) => {
    try {
        const { designerId, scheduledDateTime, number, address } = req.body;

        if (!designerId || !scheduledDateTime || !number || !address) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const consultation = await Consultation.create({
            userId: req.authenticatedUser._id,
            designerId,
            scheduledDateTime,
            number,
            address
        });

        return res.status(201).json({ success: true, message: "Consultation booked successfully", consultation });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get consultations for a designer
const getConsultationsByDesigner = async (req, res) => {
    try {
        const { id } = req.params; // Designer ID
        const consultations = await consultationModel.find({ designerId: id })
            .populate("userId", "name email")
            .sort({ scheduledDateTime: 1 });

        return res.status(200).json({ success: true, consultations });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get consultations for a homeowner
const getConsultationsByUser = async (req, res) => {
    try {
        const { id } = req.params; // Homeowner ID
        const consultations = await consultationModel.find({ userId: id })
            .populate("designerId", "name email")
            .sort({ scheduledDateTime: 1 });

        return res.status(200).json({ success: true, consultations });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Update consultation status (Designer only)
const updateConsultationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, number, address } = req.body;

        // Validate status if provided
        if (status && !["pending", "confirmed", "cancelled"].includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status" });
        }

        // Find consultation
        const consultation = await consultationModel.findById(id);
        if (!consultation) {
            return res.status(404).json({ success: false, message: "Consultation not found" });
        }

        // Update fields only if provided
        if (status) consultation.status = status;
        if (number) consultation.number = number;
        if (address) consultation.address = address;

        await consultation.save();

        return res.status(200).json({
            success: true,
            message: "Consultation updated successfully",
            consultation
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// @desc    Delete a consultation (Designer or Homeowner)
const deleteConsultation = async (req, res) => {
    try {
        const { id } = req.params;

        const consultation = await consultationModel.findById(id);
        if (!consultation) return res.status(404).json({ success: false, message: "Consultation not found" });

        await Consultation.findByIdAndDelete(id);

        return res.status(200).json({ success: true, message: "Consultation deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createConsultation,
    getConsultationsByDesigner,
    getConsultationsByUser,
    updateConsultationStatus,
    deleteConsultation
};
