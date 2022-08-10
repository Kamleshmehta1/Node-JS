const dbMainConnection = require("./Connection");

function dbConnect() {
  dbMainConnection().then((response) => {
    response
      .find({ name: "educational" })
      .toArray()
      .then((data) => {
        console.log(data);
        return data;
      });
  });
}

console.log(dbConnect());
