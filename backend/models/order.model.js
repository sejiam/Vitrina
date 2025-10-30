import db from "../db/config.db.js";
import * as Queries from "../db/orders.queries.db.js";

export async function getAllOrders() {
  const res = await db.query(Queries.getAllOrders);
  return res.rows;
}

export async function getOrderByID(id) {
  const res = await db.query(Queries.getOrderByID, [id]);
  return res.rows[0];
}

export async function createOrder(order) {
  const { user_id, status, total } = order;
  const res = await db.query(Queries.createOrder, [user_id, status, total]);
  return res.rows[0];
}
