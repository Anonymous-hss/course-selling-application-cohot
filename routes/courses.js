const { Router } = require("express");

const courseRouter = Router();

Router.post("purchase", function (req, res) {
  res.json({
    message: "purchase",
  });
});

Router.get("courses", function (req, res) {
  res.json({
    message: "All courses endpoint",
  });
});

export default coursesEndPoints;
