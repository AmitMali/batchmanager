const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
    },
    fees: {
      type: Number,
    },
    categories: {
      type: [String],
    },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("courses", courseSchema);
module.exports = courseModel;
