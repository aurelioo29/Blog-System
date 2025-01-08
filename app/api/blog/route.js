import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  console.log("Blog GET called");
  return NextResponse.json({ message: "API Working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteDate = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteDate);

  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);

  const imgURL = `/${timestamp}_${image.name}`;
  console.log(imgURL);

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, message: "Blog Created" });
}
