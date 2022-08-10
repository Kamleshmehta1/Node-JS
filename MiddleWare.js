const express = require("express");
const app = express();
const path = require("path");
const route = express.Router();

const reqFilter = require("./MiddleWare1");

// app.use(reqFilter);

route.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to HomePage");
});

app.get("/users", (req, resp) => {
  resp.send("Welcome to UsersPage");
});
route.get("/about", (req, resp) => {
  resp.send("Welcome to AboutPage");
});
route.get("/contact", (req, resp) => {
  resp.send("Welcome to Contact Page");
});

app.use("/", route);

app.listen(5000);
