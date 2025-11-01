import express from "express";
import cors from "cors";
import "./configs/env.js";
import initDB from "./db/init.db.js";
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js";
import productRouter from "./routes/product.routes.js";
import orderRouter from "./routes/order.routes.js";
import orderItemRouter from "./routes/orderItem.routes.js";
import reviewRouter from "./routes/review.routes.js";
import cartItemRouter from "./routes/cartItem.routes.js";
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/orderItem", orderItemRouter);
app.use("/api/review", reviewRouter);
app.use("/api/cartItem", cartItemRouter);

initDB().then(
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  })
);
