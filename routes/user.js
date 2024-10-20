const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "login endpoint",
  });
});

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "registration endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "mycourses endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
