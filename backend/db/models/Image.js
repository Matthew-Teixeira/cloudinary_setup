const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
