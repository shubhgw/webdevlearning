// import mongoose from "mongoose";
import express from "express";
// import { dummyData } from "./models/dummydata.js";

const app = express();
const port = 3000;
// let connection = await mongoose.connect("mongodb://localhost:27017/dummydata");

let names = ["Shubh", "Harry", "Vaiju", "Saii"];
let salaries = [30, 50, 30, 40];
let languages = ["Python", "JavaScript", "Java", "Rust"];
let cities = ["Poor", "UP", "Hingoli", "Futana"];
let isManager = [true, false, true, false];

function randomNumber() {
  return Math.floor(Math.random() * 4 + 1);
}

export function generateDummyData() {
  console.log(names[randomNumber()]);
  console.log(salaries[randomNumber()]);
  console.log(languages[randomNumber()]);
  console.log(cities[randomNumber()]);
  console.log(isManager[randomNumber()]);
}

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
