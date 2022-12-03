import mongoose from "mongoose";
//Schema is also a validator

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      max: [
        168,
        `The total hour for a week is 168, and you saying you spent the whole time doing task.`,
      ],
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema); // tasks
