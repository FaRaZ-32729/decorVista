const mongoose = require("mongoose");

const savedDesignSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    image: { type: String, required: true },
    category: { type: String },
    theme: { type: String },
    colorScheme: { type: String }
}, { timestamps: true });

const savedDesignModel = mongoose.model("SavedDesign", savedDesignSchema);
module.exports = savedDesignModel
