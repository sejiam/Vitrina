import express from "express";
import cors from "cors";
import "./configs/env.js";
import initDB from "./db/init.db.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);

initDB().then(
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  })
);
