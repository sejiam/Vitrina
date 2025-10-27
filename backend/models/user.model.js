import db from "../db/config.db.js";
import * as Queries from "../db/users.queries.db.js";

export async function getAllUsers() {
  const res = await db.query(Queries.getAllUsers);
  return res.rows;
}

export async function getUserByID(id) {
  const res = await db.query(Queries.getUserByID, [id]);
  return res.rows[0];
}

export async function createUser(user) {
  const { name, email, password_hash, role } = user;
  const res = await db.query(Queries.createUser, [
    name,
    email,
    password_hash,
    role,
  ]);
  return res.rows[0];
}
