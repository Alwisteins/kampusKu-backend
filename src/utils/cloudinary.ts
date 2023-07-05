import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.config({
  cloud_name: "dfngeo1wz",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


const uploadImageToCloudinary = async (imagePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    console.log("Image uploaded successfully:", result.secure_url);
  } catch (error: any) {
    console.error("Error uploading image:", error);
  }
};

// Panggil fungsi untuk mengunggah gambar
uploadImageToCloudinary(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"
);
