import express from "express";
const app = express();
const PORT = 8000;
// console.log("express is on the way");
import cors from "cors";
import morgan from "morgan";
//db connect
import mongoConnect from "./src/config/dbConfig.js";
mongoConnect();

//middleware - when you need to run to some code to modify the process  while running a application
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/task", taskRouter);

//handle all uncaught router request
app.use("*", (req, res, next) => {
  const error = {
    code: 404,
    message: "404 Page Not Found !",
  };
  next(error);
});

//handle global error
app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});

//  kill $(lsof -t -i :8000)
