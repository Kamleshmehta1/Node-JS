const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log(req.query.kamlesh);
  resp.send(`
  <h1>Welcome, to HomePage</h1>
  <a href="/About">about</a>
  <a href="/help">Help</a>
  `);
});

app.get("/About", (req, resp) => {
  resp.send(`
  <a href="/">HomePage</a>
  <input type="text" placeholder="username" value="${req.query.name}" />
  <button>click me</button>
  `);
});

app.get("/Help", (req, resp) => {
  resp.send([
    {
      name: "kamlesh",
    },
    {
      surname: "mehta",
    },
  ]);
});

app.listen(5000);
