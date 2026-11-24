const fs = require("fs");
const path = require("path");

const pathOfFiles = "./files";

const filesList = fs.readdirSync(`${pathOfFiles}`);

for (i = 0; i < filesList.length; i++) {
  const extName = path.extname(`${pathOfFiles}/${filesList[i]}`).slice(1);
  fs.mkdirSync(`./files/${extName}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.copyFileSync(
    `${pathOfFiles}/${filesList[i]}`,
    `${pathOfFiles}/${extName}/${filesList[i]}`,
  );
  fs.rm(`${pathOfFiles}/${filesList[i]}`);
}
