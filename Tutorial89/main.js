const express = require("express");
const blog = require("./routes/blog");
const app = express();
const port = 3000;

app.use(express.static("public")); // its a middleware
app.use("/blog", blog);

// Post :
// Get :
// Delete :

app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World fuck !");
});

app.post("/", (req, res) => {
  console.log("Hey its a post request");
  res.send("Hello World from post !");
});

app.put("/", (req, res) => {
  console.log("Hey its a put request");
  res.send("Hello World from put !");
});

app.get("/index", (req, res) => {
  console.log("Hey its a get request for index html page");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/download", (req, res) => {
  console.log("Hey lets download the image");
  res.download("res.methods.png", { root: __dirname });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
