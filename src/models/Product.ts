const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    images: { type: Array, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: { type: Array, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("products", ProductSchema);
