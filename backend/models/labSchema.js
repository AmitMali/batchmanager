const mongoose = require("mongoose");

const labSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    capacity: { type: Number, require: true },
    floor: { type: Number, require: true },
    technology: { type: [String] },
  },
  { timestamps: true }
);

const labModel = mongoose.model("labs", labSchema);
module.exports = labModel;
