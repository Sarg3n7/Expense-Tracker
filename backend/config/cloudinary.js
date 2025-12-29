// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// console.log("CLOUDINARY CONFIG CHECK:", {
//   cloud: process.env.CLOUDINARY_CLOUD_NAME,
//   key: process.env.CLOUDINARY_API_KEY,
//   secret: process.env.CLOUDINARY_API_SECRET ? "SET" : "MISSING",
// });


// export default cloudinary;



import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";

// Ensure env is loaded BEFORE configuring cloudinary
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

// Configure cloudinary AFTER env is guaranteed
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
