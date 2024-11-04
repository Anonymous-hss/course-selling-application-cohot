const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "You have sucessfully bought the course",
  });
});

courseRouter.get("/preview", async function (req, res) {
  const course = await courseModel.find({});
  res.json({
    message: "All courses endpoint",
    course,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
