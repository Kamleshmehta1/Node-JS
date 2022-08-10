const dbConnect = require("./Connection");

const updateData = async () => {
  const data = await dbConnect();
  let result = await data.updateOne(
    { name: "monal" },
    { $set: { name: "newUpdate", category: "done-updated" } }
  );
  console.log(result);
};

updateData();
