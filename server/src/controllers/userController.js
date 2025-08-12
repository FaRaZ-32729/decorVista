const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs")

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(500).json({ success: false, message: "All Fields Are Required" });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ success: false, message: "User Already Exists" });
        }

        const encryptedPass = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            password: encryptedPass,
            role
        });

        return res.status(200).json({ success: true, message: "New User Added Successfully", newUser: newUser });

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).json({ success: true, users: users })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getSingleUser = async (req, res) => {
    try {
        id = req.params.id;
        const user = await userModel.findById(id);
        if (!user) return res.status(404).json({ success: false, message: "User Not Found" });
        return res.status(200).json({ success: true, user: user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.role = req.body.role || user.role;

        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10);
        }

        await user.save();

        return res.status(200).json({ success: true, message: "User Updated Successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }

        await userModel.findByIdAndDelete(id);

        return res.status(200).json({ success: true, message: "User Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



module.exports = { registerUser, getAllUsers, getSingleUser, updateUser, deleteUser }