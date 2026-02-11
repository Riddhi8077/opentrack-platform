import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  status: {
    type: String,
    enum: ["Applied", "In Progress", "Selected", "Rejected"],
    default: "Applied"
  },
  deadline: {
    type: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Program", programSchema);

