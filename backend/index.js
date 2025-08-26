// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import userRoute from "./routes/userRoute.js";

// dotenv.config();
// const app = express();

// app.use(cors({
//   origin:"https://portfolio2-1-f5g6.onrender.com"
// }
// ));
// app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.use("/api", userRoute);
// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(` Server is running on port ${PORT}`);
// });
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

// Allow JSON
app.use(express.json());

// Correct CORS setup
app.use(cors({
  origin: "https://portfolio2-1-f5g6.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow preflight
  allowedHeaders: ["Content-Type"], // allow JSON headers
}));

// Preflight for all routes
app.options("*", cors());

// Routes
app.use("/api", userRoute);

// DB connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
