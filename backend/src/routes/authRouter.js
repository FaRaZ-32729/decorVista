const express = require("express");
const { logIn, logOut , profile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", logIn);
router.get("/me", authMiddleware, profile);
router.delete("/logout", logOut);


module.exports = router