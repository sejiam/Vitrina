import express from "express";
import * as Controller from "../controllers/orderItem.controller.js";

const orderItemRouter = express.Router();

orderItemRouter.get("/", Controller.handleGetAllOrderItems);
orderItemRouter.get("/:id", Controller.handleGetOrderItemByID);
orderItemRouter.post("/", Controller.handleCreateOrderItem);

export default orderItemRouter;
