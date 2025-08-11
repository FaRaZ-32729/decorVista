const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Homeowner
    designerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Designer
    scheduledDateTime: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    number: { type: String, required: true }, // Phone number for contact
    address: { type: String, required: true } // Consultation address
}, { timestamps: true });

const consultationModel = mongoose.model("Consultation", consultationSchema);

module.exports = consultationModel;