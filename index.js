const express = require("express");
const { courseRouter } = require("./routes/courses");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);

app.listen(3000);
