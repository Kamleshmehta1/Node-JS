const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dataBase = "YouTube";

async function dbMainConnection() {
  let result = await client.connect();
  let db = result.db(dataBase);
  let collection = db.collection("playList");
  return collection;
}

module.exports = dbMainConnection;
