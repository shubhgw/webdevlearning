import express from "express";
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/about", (req, res) => {
  res.send("on about page");
});

app.get("/contact", (req, res) => {
  res.send("on contact page");
});

app.get("/blogs/:slug", (req, res) => {
  // we write so many blogs so writing in this manner isn't good & not maintanable so we have new feature :slug (:slug is a parameter )

  // for URL : http://127.0.0.1:3000/blogs/hello?mode=dark&lang=en

  console.log(req.params); // hello
  console.log(req.query); // mode=dark, lang=en

  res.send(`on ${req.params.slug} page`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
