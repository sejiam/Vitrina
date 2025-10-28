import express from "express";
import * as Controller from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", Controller.handleGetAllProducts);
productRouter.get("/:id", Controller.handleGetProductByID);
productRouter.post("/", Controller.handleCreateProduct);

export default productRouter;
