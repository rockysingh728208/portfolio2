import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();




// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:5173",   // development (vite frontend local)
  "https://portfolio2-wcf3.vercel.app"  // deployment (frontend vercel url)
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed for this origin"), false);
    }
  },
  credentials: true
}));







app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api", userRoute);
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});


