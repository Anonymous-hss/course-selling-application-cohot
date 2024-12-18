const { Router } = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 7; // or adjust as needed
const adminRouter = Router();
const { adminModel, courseModel } = require("../db.js");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const { JWT_ADMIN_PASSWORD } = require("../config");

const adminSchema = z.object({
  email: z.string().email({ message: "Invalid Emial Address" }),
  password: z.string().min(6, { message: "Enter min of 6 characters" }),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

adminRouter.post("/signup", async function (req, res) {
  try {
    const { email, password, firstName, lastName } = adminSchema.parse(
      req.body
    );
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await adminModel.create({
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

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
  });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(403).json({ message: "Incorrect Credentials" });
  }

  if (admin) {
    jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId,
  });
  res.json({
    message: "course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    { _id: courseId, creatorId: adminId },
    {
      title,
      description,
      imageUrl,
      price,
    }
  );
  res.json({
    message: "course updated",
    courseId: course._id,
  });
});

adminRouter.put("/course/bulk", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const course = await courseModel.find({ creatorId: adminId });
  res.json({
    message: "course updated",
    course,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
