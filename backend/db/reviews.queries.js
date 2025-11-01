export const getAllReviews = `SELECT * FROM reviews ORDER BY created_at DESC`;
export const getReviewByID = `SELECT * FROM reviews WHERE id=$1`;
export const createReview = `INSERT INTO reviews
    (user_id, product_id, rating, comment)
    VALUES ($1 , $2 , $3 , $4)
    RETURNING *
`;
