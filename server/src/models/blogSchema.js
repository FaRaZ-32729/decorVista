const user = require("./userSchema")
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
}, { timestamps: true });

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;