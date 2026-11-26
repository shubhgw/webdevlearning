const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why & when ?";
  let blogContent = "It is a very good brand";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
