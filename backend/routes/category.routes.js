import express from "express";
import * as Controller from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", Controller.handleGetAllCategories);
categoryRouter.get("/:id", Controller.handleGetCategoryById);
categoryRouter.post("/", Controller.handleCreateCategory);

export default categoryRouter;
