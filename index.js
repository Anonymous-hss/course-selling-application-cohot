const express = require("express");

// const { createUserRoute, userRouter } = require("./routes/user");
// const { createCourseRoute } = require("./routes/courses");
const app = express();
app.use("/user", userRouter);
app.use("/courses", courseRouter);

// createCourseRoute(app);
// createUserRoute(app);

app.listen(3000);
