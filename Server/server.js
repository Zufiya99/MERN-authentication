// dotenv.config();

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/mongodb.js";
// import authRoute from "./routes/authRoute.js";

// const app = express();

// const PORT = process.env.PORT || 3000;

// connectDB();

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//   })
// );

// // API endpoints
// app.use("/api/auth", authRoute);

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoute from "./routes/authRoute.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

// API endpoints
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
