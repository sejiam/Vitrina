export const getAllCategories = `SELECT * FROM categories`;
export const getCategoryByID = `SELECT * FROM categories WHERE id = $1`;
export const createCategory = `INSERT INTO categories
    (name) 
    VALUES ($1)
    RETURNING *
`;
