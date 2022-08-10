const mongoose = require("mongoose");
const ProductsSchemas = mongoose.Schema({
  name: String,
  category: String,
});

mongoose.pluralize(null);
module.exports = mongoose.model("playList", ProductsSchemas);
