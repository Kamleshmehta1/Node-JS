const mysql = require("mysql");
const colors = require("colors");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

con.connect((err) => {
  if (err) {
    console.log(`${JSON.stringify(err)}`.bgRed);
  } else {
    console.log("connected".bgGreen);
  }
});

module.exports = con;
