import TaskSchema from "./TaskSchema.js";

//queries

//insert query
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// get all data
export const getTasks = () => {
  return TaskSchema.find();
};

// update a task
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

//delete items
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: { $in: ids },
  });
};
