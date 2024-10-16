import { connectDB } from "@/lib/config/db";
import writeFile from "fs/promises";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  console.log("Method GET get called");
  return NextResponse.json({ message: "Method GET get called" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();
  const image = formData.get("image");
  const imageByteDate = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteDate);
  const path = `public/${timeStamp}-${image.name}`;
  await writeFile(path, buffer);
  const imagePath = `/${timeStamp}-${image.name}`;
  console.log(imagePath);
  return NextResponse.json({success: true, msg: "Blog Added" });
}
