import db from "../db/config.db.js";
import * as Queries from "../db/categories.queries.js";

export async function getAllCategories() {
  const res = await db.query(Queries.getAllCategories);
  return res.rows;
}

export async function getCategoryByID(id) {
  const res = await db.query(Queries.getCategoryByID, [id]);
  return res.rows[0];
}

export async function createCategory(category) {
  const { name } = category;
  const res = await db.query(Queries.createCategory, [name]);
  return res.rows[0];
}
