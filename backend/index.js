import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

app.use(cors());
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
