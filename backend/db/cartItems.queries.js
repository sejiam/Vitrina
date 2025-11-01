export const getAllCartItems = `SELECT * FROM cart_items`;
export const getCartItemByID = `SELECT * FROM cart_items WHERE id=$1`;
export const createCartItem = `INSERT INTO cart_items
    (user_id, product_id, quantity)
    VALUES ($1 , $2 , $3)
    RETURNING *
`;
