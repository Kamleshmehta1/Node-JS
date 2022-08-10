const script2 = require("./script2");
const fs = require("fs");

console.log(script2);
console.log(script2.x);

script2.z();

fs.writeFileSync("kamlesh.txt", "kamlesh Mehta");
let a = fs.readFileSync("kamlesh.txt");

console.log(__dirname);
console.log(__filename);

const http = require("http");

let dataControl = (req, resp) => {
  resp.write("<h1>Hey Kamlesh Mehta</h1>");
  resp.end();
};

// http.createServer(dataControl).listen(4500);

const colors = require("colors");

console.log("kamlesh mehta".red);
