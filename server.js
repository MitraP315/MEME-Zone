import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDb from "./config/db.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
dotenv.config();
//connrct db
ConnectDb();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server running on port ${PORT}`);
});
