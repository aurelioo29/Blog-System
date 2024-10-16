import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aurelio:aurelioluciolie@cluster0.kjt7y.mongodb.net/blog-app"
  );
  console.log("Connected to MongoDB");
};
