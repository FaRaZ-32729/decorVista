const express = require("express");
const { createBlog, getSingleBlog, getAllBlogs, updateBlog, deleteBlog } = require("../controllers/blogController");
const router = express.Router();

router.post("/", createBlog);
router.get("/:id", getSingleBlog);
router.get("/", getAllBlogs);
router.put("/", updateBlog);
router.delete("/", deleteBlog);

module.exports = router;