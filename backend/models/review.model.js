import db from "../db/config.db.js";
import * as Queries from "../db/reviews.queries.js";

export async function getAllReviews() {
  const res = await db.query(Queries.getAllReviews);
  return res.rows;
}

export async function getReviewByID(id) {
  const res = await db.query(Queries.getReviewByID, [id]);
  return res.rows[0];
}

export async function createReview(review) {
  const { user_id, product_id, rating, comment } = review;
  const res = await db.query(Queries.createReview, [
    user_id,
    product_id,
    rating,
    comment,
  ]);
  return res.rows[0];
}
