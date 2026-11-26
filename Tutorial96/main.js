// https://www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;
let mong = await mongoose.connect("mongodb://localhost:27017/todo");

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Hey  first todo",
    desc: "Description of this todo",
    isDone: false,
    rank: 23,
  });
  todo.save();
  res.send("Hello world !");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// to give otb skeema mongoose it used ; bcoz mongodb dont enforces the inputs
