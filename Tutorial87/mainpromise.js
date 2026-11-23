import fs from "fs/promises";

let a = await fs.readFile("harry2.txt");
console.log(a.toString());

let b = await fs.writeFile("harry.txt", "Thhis is an amazing promise.");
console.log((await fs.readFile("harry.txt")).toString())