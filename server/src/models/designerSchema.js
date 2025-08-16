const mongoose = require("mongoose");

const designerSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        specialization: {
            type: String,
            required: true,
        },
        image: { 
            type: String,
            required: true, 
        },
        availableTimeSlots: [
            {
                date: { type: String, required: true }, 
                times: [{ type: String }], 
            },
        ],
        phoneNumber: {
            type: String,
            required: true,
        },
        yearsOfExperience: {
            type: Number,
            required: true,
        },
        about: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const designerModel = mongoose.model("designerSchema", designerSchema);

module.exports = designerModel;
