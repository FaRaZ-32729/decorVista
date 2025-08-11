const express = require("express");
const { registerUser, getAllUsers, updateUser, deleteUser, getSingleUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)

module.exports = router