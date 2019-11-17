import mongoose from "mongoose";

export default mongoose.model("Category", new mongoose.Schema({
  slug: String,
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  description: String,
  parent_id: mongoose.Types.ObjectId,
}));
