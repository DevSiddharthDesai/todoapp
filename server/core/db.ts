import mongoose from "mongoose";
import config from "./config";

const data = config.DB_URL as string;

const uri: string =
  "mongodb+srv://codewithreact1:EL7qFZ9Vn4xiTCB0@cluster0.rauek8p.mongodb.net/todoapp?retryWrites=true&w=majority";

// Connecting to the database
const connectDB = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Successfully connected to the database" + uri);
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

export default connectDB;
