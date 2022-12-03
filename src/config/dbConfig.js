import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    const dbUrl = "mongodb://localhost/ntdl";
    const conn = await mongoose.connect(dbUrl);

    conn ? console.log("Mongo Connnected") : console.log(error);
  } catch (error) {
    console.log(error);
  }
};
export default mongoConnect;
