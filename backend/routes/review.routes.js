import express from "express";
import * as Controller from "../controllers/review.controller.js";

const reviewRouter = express.Router();

reviewRouter.get("/", Controller.handleGetAllReviews);
reviewRouter.get("/:id", Controller.handleGetReviewByID);
reviewRouter.post("/", Controller.handleCreateReview);

export default reviewRouter;
