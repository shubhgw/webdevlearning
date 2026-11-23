// const { createServer } = require("node:http");
// const fs = require("fs");

// common js method to import modules - seted by default
// but type:module is modern & loads requiremnets asynchronously while common js import synchronously

import http from "http";
import { a, b } from "./mymodule.js";
import byDefaultAllValues from "./mymodule.js"

const hostname = "127.0.0.1";
const port = 3600;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World ");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log(a, b, byDefaultAllValues);
 