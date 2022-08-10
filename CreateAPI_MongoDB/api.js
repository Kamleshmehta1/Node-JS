const express = require("express");
const dbConnect = require("./Connection");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  //read data from API using get
  let data = await dbConnect();
  data = await data.find().toArray();
  //   console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  //insert data using post method
  console.log(req.body);
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  resp.send(data);
});

app.put("/:name", async (req, resp) => {
  // update
  let data = await dbConnect();
  //   data = await data.updateOne({ name: req.body.name }, { $set: req.body });
  data = await data.updateOne({ name: req.params.name }, { $set: req.body });
  console.log(data);
  resp.send(req.body);
});

app.delete("/:id", async (req, resp) => {
  //delete
  console.log(req.params.id);
  let data = await dbConnect();
  data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  resp.send("done");
});

app.listen(5000);
