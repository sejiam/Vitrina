export const getAllOrderItems = `SELECT * FROM order_items`;
export const getOrderItemByID = `SELECT * FROM order_items WHERE id=$1`;
export const createOrderItem = `INSERT INTO order_items
    (order_id, product_id, quantity, price)
    VALUES ($1 , $2 , $3 , $4)
    RETURNING *
`;
