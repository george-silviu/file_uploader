const multer = require("multer");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const serverStorage = multer.diskStorage({
  destination: async (req, file, callback) => {
    //create destination folder if not exists
    if (!fs.existsSync(path.join(__dirname, "..", "uploads"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "uploads"));
    }
    //callback to set the destination
    callback(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, callback) => {
    //set the file name
    callback(null, Date.now() + "-" + file.originalname);
  },
});

module.exports = multer({ storage: serverStorage });
