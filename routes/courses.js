const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "purchase",
  });
});

courseRouter.get("/course", function (req, res) {
  res.json({
    message: "All courses endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
