const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/YouTube");
};
connect();
const ProductsSchema = new mongoose.Schema({
  name: String,
  category: String,
});
mongoose.pluralize(null);

const saveinDB = async () => {
  const ProductsModel = mongoose.model("playList", ProductsSchema);
  let data = new ProductsModel({
    name: "kamlesh3210000000",
    category: "developer",
  });
  let result = await data.save();
  console.log(result);
};
// saveinDB();

const updateinDB = async () => {
  const Product = mongoose.model("playList", ProductsSchema);
  let data = await Product.updateOne(
    { name: "kamlesh99999999999" },
    {
      $set: { name: "kamlesh99999999999" },
      $set: { category: "Full Stack Developer" },
    }
  );
  console.log(data);
};

// updateinDB();

const deleteinDb = async () => {
  const Product = mongoose.model("playList", ProductsSchema);
  let data = await Product.deleteOne({
    name: "kamlesh99999999999",
  });
  console.log(data);
};
// deleteinDb();

const findinDb = async () => {
  const Product = mongoose.model("playList", ProductsSchema);
  let data = await Product.find({
    name: "kamlesh3210",
  });
  console.log(data);
};
findinDb();
