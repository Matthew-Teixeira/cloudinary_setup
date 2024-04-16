const router = require("express").Router();
const {
  uploadImage,
  getAllImages,
} = require("../controller/cloudinaryController");

router.post("/upload", uploadImage);
router.get("/all_images", getAllImages);

module.exports = router;
