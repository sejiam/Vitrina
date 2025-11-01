import express from "express";
import * as Controller from "../controllers/cartItem.controller.js";

const cartItemRouter = express.Router();

cartItemRouter.get("/", Controller.handleGetAllCartItems);
cartItemRouter.get("/:id", Controller.handleGetCartItemByID);
cartItemRouter.post("/", Controller.handleCreateCartItem);

export default cartItemRouter;
