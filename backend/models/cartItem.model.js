import db from "../db/config.db.js";
import * as Queries from "../db/cartItems.queries.js";

export async function getAllCartItems() {
  const res = await db.query(Queries.getAllCartItems);
  return res.rows;
}

export async function getCartItemByID(id) {
  const res = await db.query(Queries.getCartItemByID, [id]);
  return res.rows[0];
}

export async function createCartItem(cartItem) {
  const { user_id, product_id, quantity } = cartItem;
  const res = await db.query(Queries.createCartItem, [
    user_id,
    product_id,
    quantity,
  ]);
  return res.rows[0];
}
