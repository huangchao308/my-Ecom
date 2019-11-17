import mongoose from "mongoose";

export default mongoose.model("Product",  new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  details: {
    weight: Number,
    weight_units: String,
    color: String,
  },
  price: {
    retail: {
      type: Number,
      required: true,
    },
    sale: {
      type: Number,
      required: true,
    },
  },
  price_history: [{
    retail: Number,
    sale: Number,
    start: String,
    end: String,
  }],
  primary_category: String,
  category_ids: [String],
  tags: [String],
}));
