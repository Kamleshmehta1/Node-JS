const dbConnect = require("./Connection");
const color = require("colors");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "blade" });
  result.acknowledged ? console.log(`${JSON.stringify(result)}`.bgRed) : null;
};

deleteData();
