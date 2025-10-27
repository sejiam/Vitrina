import express from "express";
import * as Controller from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", Controller.handleGetAllUsers);
userRouter.get("/:id", Controller.handleGetUserById);
userRouter.post("/", Controller.handleCreateUser);

export default userRouter;
