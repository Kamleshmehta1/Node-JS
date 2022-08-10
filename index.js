const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "Render__HTML__file");


app.use(express.static(publicPath));

app.listen(5000);
