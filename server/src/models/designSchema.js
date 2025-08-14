

const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String },
    theme: { type: String },
    colorScheme: { type: String }
}, { timestamps: true });

const designModel = mongoose.model("designs", designSchema);
module.exports = designModel

