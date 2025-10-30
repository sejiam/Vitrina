export const getAllOrders = `SELECT * FROM orders ORDER BY created_at DESC`;
export const getOrderByID = `SELECT * FROM orders WHERE id=$1`;
export const createOrder = `INSERT INTO orders
    (user_id, status, total)
    VALUES ($1 , $2 , $3)
    RETURNING *
`;
