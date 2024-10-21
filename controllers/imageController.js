const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const uploader = multer({ storage });

const uploadImage = (req, res) => {
  res.send("Done");
};

module.exports = {
  uploader,
  uploadImage,
};
