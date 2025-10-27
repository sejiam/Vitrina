import db from "./db.config.js";
import * as Queries from "./db.queries.js";

export default async function initDB() {
  try {
    await db.query(Queries.createUsersTable);
    await db.query(Queries.createCategoriesTable);
    await db.query(Queries.createProductsTable);
    await db.query(Queries.createOrdersTable);
    await db.query(Queries.createOrderItemsTable);
    await db.query(Queries.createReviewTable);
    await db.query(Queries.createCartItemsTable);
    console.log("db tables initiated");
  } catch (error) {
    console.log("error in tables initiation: ", error);
  }
}
