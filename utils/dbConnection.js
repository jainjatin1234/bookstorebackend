import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.LIVE_URL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("db connection me error", error);
    });
};

export default dbConnection;
