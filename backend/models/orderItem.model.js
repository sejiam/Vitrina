import db from "../db/config.db.js";
import * as Queries from "../db/orderItems.queries.js";

export async function getAllOrderItems() {
  const res = await db.query(Queries.getAllOrderItems);
  return res.rows;
}

export async function getOrderItemByID(id) {
  const res = await db.query(Queries.getOrderItemByID, [id]);
  return res.rows[0];
}

export async function createOrderItem(orderItem) {
  const { order_id, product_id, quantity, price } = orderItem;
  const res = await db.query(Queries.createOrderItem, [
    order_id,
    product_id,
    quantity,
    price,
  ]);
  return res.rows[0];
}
