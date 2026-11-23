import path from "path";
// console.log(path);

const myPath =
  "/Coding Data/Full Stack Web Dev/Full stack Web Dev/Tutorial87/harry.txt";

console.log(path.extname(myPath));
console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("./shubhgw", "harry.txt"))