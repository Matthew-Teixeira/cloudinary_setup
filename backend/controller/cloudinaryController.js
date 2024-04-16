const cloudinary = require("cloudinary").v2;
const { Image, Video } = require("../db/models");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const uploadImage = async (req, res, next) => {
  try {
    const { imgUrl } = req.body;

    if (!imgUrl) {
      res.status(400);
      return next(new Error("Image URL Not Present"));
    }

    const image = await Image.create({ imgUrl });

    res.status(201).json({
      success: true,
      image,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};

const getAllImages = async (req, res) => {
  console.log("BACKEND GET ALL IMAGES");
  res.status(200).json({ message: "You got all images" });
};

module.exports = {
  uploadImage,
  getAllImages,
};
