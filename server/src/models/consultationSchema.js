const mongoose = require("mongoose");
const userModel = require("./userSchema");

const consultationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    designerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    scheduledDateTime: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    number: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const consultationModel = mongoose.model("Consultation", consultationSchema);

module.exports = consultationModel;