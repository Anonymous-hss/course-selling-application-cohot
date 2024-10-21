const { Router } = require("express");
const { bcrypt } = require("bcrypt");
const saltRounds = 5;
const { userModel } = require("../db");

const userRouter = Router();

userRouter.post("/signin", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (e) {
    message: "Error encrypting password";
  }

  try {
    await userModel.create({
      email: email,
      hashedPassword: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    message: "Error connecting DB" + e;
  }

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
