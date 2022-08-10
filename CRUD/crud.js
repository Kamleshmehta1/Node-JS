const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "CRUD");
const filePath = `${dirPath}/kamlesh.txt`;

// fs.writeFileSync(`${dirPath}/kamlesh.txt`, "created file named kamlesh");

fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

// fs.appendFile(filePath,"and file name is kamlesh.txt ok ?",(err)=>{
//     console.log(err);
// })

// fs.rename(filePath, `${dirPath}/myFile.txt`, (err) => {
//   console.log(err);
// });

// fs.unlinkSync(`${dirPath}/myFile.txt`)
