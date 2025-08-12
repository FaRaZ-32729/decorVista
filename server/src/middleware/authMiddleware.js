const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");


const authMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ success: false, message: "Unauthenticated User" });

        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const authenticatedUser = await userModel.findById(_id);
        if (!authenticatedUser) return res.status(404).json({ success: false, message: "User Not Found" });


        req.authenticatedUser = authenticatedUser;
        next();

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = authMiddleware