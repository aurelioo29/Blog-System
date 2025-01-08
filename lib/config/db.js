import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aurelioBlog:aurelioBlog@cluster0.sysj0.mongodb.net/blog-app"
  );
  console.log("Connected to MongoDB");
};
