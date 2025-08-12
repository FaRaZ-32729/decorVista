const fs = require("fs");
const path = require("path");
const multer = require("multer");

const imagesDir = path.join(__dirname, "../images");

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagesDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed!"), false);
    }
};

const uploadFile = multer({ storage, fileFilter }).single("image");

module.exports = uploadFile;
