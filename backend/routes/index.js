const router = require("express").Router();
const cloudinaryRoutes = require("./cloudinaryRoutes");

// router.get("/images", getAllImages);
router.use("/cloud", cloudinaryRoutes);

module.exports = router;
