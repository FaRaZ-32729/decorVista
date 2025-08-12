const blogModel = require("../models/blogSchema");


const createBlog = async (req, res) => {
    try {
        const { title, content, image } = req.body;

        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Title and content are required" });
        }

        const blog = await blogModel.create({
            title,
            content,
            image,
            authorId: req.authenticatedUser._id
        });

        return res.status(201).json({ success: true, blog });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().populate("authorId", "name email");
        return res.status(200).json({ success: true, blogs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getSingleBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id).populate("authorId", "name email");
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
        return res.status(200).json({ success: true, blog });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const updateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;
        blog.image = req.body.image || blog.image;

        await blog.save();

        return res.status(200).json({ success: true, blog });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        await Blog.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog };
