const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let storagePath = "";
        fs.mkdirSync(storagePath, { recursive: true });

        cb(null, storagePath);
    },
    filename: (req, file, cd) => {
        cb(null, Date.now() + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);  
    } else {
        cb(new Error("Image Upload Problem"), false)
    }
};

const upload = multer ({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
}).array("imageField", 10);

module.exports = {
    async uploadProductImage(req, res, next) {
        try {
            await upload(req, res, function (err) {
                if (err) {
                    return res.send("Sorry, an error occured on uploading image/s.");
                } else {
                    next();
                }
            });
        } catch (error) {
            res.status(500).send({
                error: 'Sorry, an error2 occured when uploading product/s image/s.',
            });
        }
    },
};