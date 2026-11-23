import fs from "fs";
import { start } from "repl";

console.log(fs);

console.log("start");
// fs.writeFileSync("./harry.txt", "Harry is a good boy"); // it proceed only after work is done...... but we want asynchrounus !

fs.writeFile("harry2.txt", "Harry is a good teacher.", () => {
  console.log("done writing file");
  //   fs.readFile("./Harry.txt"); it throws error
  fs.readFile("./harry2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

console.log("end");

// to avoid callback hell we have promises
