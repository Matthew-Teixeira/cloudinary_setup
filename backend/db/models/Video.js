const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
