const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "Render__HTML__file");

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "kamlesh",
    domain: "full stack developer",
    array: ["c", "c++", "javascript", "java"],
  };
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
