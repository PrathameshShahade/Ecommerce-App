const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    bimg1:{type: String, required: true},
    bimg2:{type: String, required: true},
    bimg3:{type: String, required: true},
    bimg4:{type: String, required: true},
    bimg5:{type: String, required: true},
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: {type:Boolean, default: true},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);