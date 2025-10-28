import db from "../db/config.db.js";
import * as Queries from "../db/products.queries.js";

export async function getAllProducts() {
  const res = await db.query(Queries.getAllProducts);
  return res.rows;
}

export async function getProductByID(id) {
  const res = await db.query(Queries.getProductByID, [id]);
  return res.rows[0];
}

export async function createProduct(product) {
  const { title, description, price, stock, category_id, owner_id, image_url } =
    product;
  const res = await db.query(Queries.createProduct, [
    title,
    description,
    price,
    stock,
    category_id,
    owner_id,
    image_url,
  ]);
  return res.rows[0];
}
