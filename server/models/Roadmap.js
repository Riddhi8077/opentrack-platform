import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Roadmap", roadmapSchema);

