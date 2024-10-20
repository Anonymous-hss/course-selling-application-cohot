const express = require("express");
const mongoose = requrie("mongoose");
const { courseRouter } = require("./routes/courses");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://h2424:h2424@cluster0.c2mlnwt.mongodb.net/courseraapp",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));

  app.listen(3000);
}

main();
