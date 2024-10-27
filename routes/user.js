const { Router } = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const saltRounds = 5;
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aladin4568";

const userRouter = Router();

const userSchema = z.object({
  email: z.string().email({ message: "Invalid Emial Address" }),
  password: z.string().min(6, { message: "Enter min of 6 characters" }),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

userRouter.post("/signup", async function (req, res) {
  try {
    const { email, password, firstName, lastName } = userSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({ message: "created successfully" });
  } catch (e) {
    console.error(e); // This will log the actual error in the server console
    return res.status(500).json({ message: "Server error" });
  }

  res.json({
    message: "Signup endpoint",
  });
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
  });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(403).json({ message: "Incorrect Credentials" });
  }

  if (user) {
    jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    // Token based authentication logic -----

    res.json({
      message: "signin endpoint",
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }

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
