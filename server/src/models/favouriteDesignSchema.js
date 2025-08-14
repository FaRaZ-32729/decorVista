const mongoose = require("mongoose");
const user = require("./userSchema")

const favouriteDesignSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    image: { type: String, required: true },
    category: { type: String },
    theme: { type: String },
    colorScheme: { type: String }
}, { timestamps: true });

const favouriteDesignModel = mongoose.model("favouriteDesigns", favouriteDesignSchema);
module.exports = favouriteDesignModel