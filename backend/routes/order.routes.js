import express from "express";
import * as Controller from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/", Controller.handleGetAllOrders);
orderRouter.get("/:id", Controller.handleGetOrderByID);
orderRouter.post("/", Controller.handleCreateOrder);

export default orderRouter;
