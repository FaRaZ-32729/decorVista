const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Rrquired"
            });
        }

        const existingUser = await userModel.findOne({ email });
        if (!existingUser) return res.status(404).json({ success: false, message: "User Not Found " });

        const comparePass = await bcrypt.compare(password, existingUser.password);
        if (!comparePass) return res.status(400).json({ success: false, message: "Invalid Credentials" });

        const token = jwt.sign(
            { _id: existingUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict"
        });

        return res.status(200).json({ success: true, message: "Login Successfull", existingUser });

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const profile = (req, res) => {
    return res.json(req.authenticatedUser)
}

const logOut = async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "strict" });
        return res.status(200).json({ success: true, message: "LogOut Successfull" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    logIn,
    profile,
    logOut
}