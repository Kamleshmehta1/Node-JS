const dbConnect = require("./Connection");
const color = require("colors");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "monal", category: "blueBerry" },
    { name: "blade", category: "gamer" },
  ]);
  result.acknowledged ? console.log("data inserted".bgWhite) : null;
};

insert();
