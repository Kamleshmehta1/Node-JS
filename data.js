data = [
  { name: "kamlesh mehta gmail", email: "kamleshm1999@gmail.com" },
  { name: "kamlesh mehta yahoo", email: "k_mehta50@yahoo.com" },
  { name: "unknown", email: "no email" },
];

module.exports = data;

console.log(process.argv[3]); // all node data

const fs = require("fs");

if (process.argv[2] === "add")
  fs.writeFileSync(process.argv[3], process.argv[4]);
else if (process.argv[2] === "remove") fs.unlinkSync("newFile.txt");
else console.log("invalid o/p");
