const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));

// Middleware 1
app.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by Middleware 1");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hello World fuck !");
});
app.get("/about", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World fuck !");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
