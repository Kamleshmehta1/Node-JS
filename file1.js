const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
console.warn(dirPath);

// for (let i = 0; i <= 5; i++) {
//   fs.writeFileSync(`${dirPath}kamlesh${i}.txt`, `file${i}`); // create multiple files
// }

// for (let i = 0; i <= 5; i++) {
//   fs.unlinkSync(`${dirPath}kamlesh${i}.txt`, `file${i}`); // remove multiple files
// }

fs.readdir(dirPath, (err, files) => {
  files.map((item, index) => {
    console.log(`file number ${index} name is -> ` + item);
  });
});
