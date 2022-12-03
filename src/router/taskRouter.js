import express from "express";
import {
  deleteManyTasks,
  getTasks,
  insertTask,
  updateTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

// delete this fake db when integrate with database
// let fakeDb = [
//   {
//     _id: 1,
//     task: "Watching TV",
//     hr: 40,
//     type: "entry",
//   },
// ];

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json({
      status: "success",
      message: "list of the task",
      tasks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await insertTask(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "The new task has been added",
      });
    }

    console.log(result);
    res.json({
      status: "success",
      message: "The new task has been added",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    //update
    const task = await updateTask(_id, type);
    console.log(task);
    if (task?._id) {
      return res.json({
        status: "success",
        message: "The Task has been switched",
      });
    }
    res.json({
      status: "error",
      message: "Unable to switch, tyr again later",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

// use this method for single item to delete
// router.delete("/:_id", (req, res, next) => {
// const { _id } = req.params;

// fakeDb = fakeDb.filter((item) => item._id !== Number(_id));

//this approach to delete mulitple items
router.delete("/", async (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);
  try {
    const result = await deleteManyTasks(_idArg);
    console.log(result);
    if (result?.deltedCount) {
      return res.json({
        status: "success",
        message: "Deleted successfully",
      });
    }
    res.json({
      message: "deleted items",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
