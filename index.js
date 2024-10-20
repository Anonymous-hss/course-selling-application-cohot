const express = require("express");
const { courseRouter } = require("./routes/courses");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

// const { createUserRoute, userRouter } = require("./routes/user");
// const { createCourseRoute } = require("./routes/courses");
const app = express();
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);

// createCourseRoute(app);
// createUserRoute(app);

app.listen(3000);
