const express = require("express");
require("./config");
const Products = require("./Product");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await Products.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        category: { $regex: req.params.key },
      },
    ],
  });
  resp.send(data);
});

app.listen(5000);
