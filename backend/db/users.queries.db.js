export const getAllUsers = `SELECT * FROM users ORDER BY created_at DESC`;
export const getUserByID = `SELECT * FROM users WHERE id = $1`;
export const createUser = `INSERT INTO users 
    (name , email , password_hash , role)
    VALUES ($1 , $2 , $3 ,$4)
    RETURNING *
`;
