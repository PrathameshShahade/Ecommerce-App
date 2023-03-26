const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    pin:{type:String, require: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", ShopSchema);