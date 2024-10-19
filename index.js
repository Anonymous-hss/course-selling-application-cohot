const express = require("express");
const app = express();

app.post("/csp/signin", function (req, res) {
  res.json({
    message: "login endpoint",
  });
});

app.post("/csp/signup", function (req, res) {
  res.json({
    message: "registration endpoint",
  });
});

app.get("/csp/purchases", function (req, res) {
  res.json({
    message: "mycourses endpoint",
  });
});

app.post("csr/purchase", function (req, res) {
  res.json({
    message: "purchase",
  });
});

app.get("/csp/courses", function (req, res) {
  res.json({
    message: "All courses endpoint",
  });
});

app.listen(3000);
