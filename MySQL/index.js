const express = require("express");
const app = express();
const con = require("./config");

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from student", (err, res) => {
    if (err) {
      console.log(resp.send("error"));
    } else {
      resp.send(res);
    }
  });
});

app.post("/", (req, resp) => {
  let data = req.body;
  con.query("INSERT INTO student SET ?", data, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.put("/:id", (req, resp) => {
  let data = [
    req.body.firstName,
    req.body.lastName,
    req.body.number,
    req.params.id,
  ];
  con.query(
    "UPDATE users SET firstName=?,lastName=?,number=? where id=?",
    data,
    (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(result);
      }
    }
  );
});

app.delete("/:id", (req, resp) => {
  con.query(
    "DELETE FROM users WHERE id =" + req.params.id,
    (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(result);
      }
    }
  );
});

app.listen(5000);
