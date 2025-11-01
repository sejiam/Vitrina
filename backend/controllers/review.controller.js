import * as Model from "../models/review.model.js";

export async function handleGetAllReviews(req, res) {
  try {
    const reviews = await Model.getAllReviews();
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetReviewByID(req, res) {
  try {
    const review_id = req.params.id;
    const review = await Model.getReviewByID(review_id);
    if (!review) return res.status(404).json({ error: "review not found" });
    else return res.status(200).json({ data: review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateReview(req, res) {
  try {
    const review_data = req.body;
    const newReview = await Model.createReview(review_data);
    res.status(201).json({ data: newReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
