import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean,
  rank: Number,
});

export const Todo = mongoose.model("Todo", toDoSchema);
