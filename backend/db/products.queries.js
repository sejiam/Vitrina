export const getAllProducts = `SELECT * FROM products ORDER BY created_at DESC`;
export const getProductByID = `SELECT * FROM products WHERE id=$1`;
export const createProduct = `INSERT INTO products
    (title, description, price, stock, category_id, owner_id, image_url)
    VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7)
    RETURNING *
`;
