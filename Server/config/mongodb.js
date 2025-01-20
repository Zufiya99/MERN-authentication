import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;
