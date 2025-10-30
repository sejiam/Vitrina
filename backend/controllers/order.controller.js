import * as Model from "../models/order.model.js";

export async function handleGetAllOrders(req, res) {
  try {
    const orders = await Model.getAllOrders();
    res.status(200).json({ data: orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetOrderByID(req, res) {
  try {
    const order_id = req.params.id;
    const order = await Model.getOrderByID(order_id);
    if (!order) return res.status(404).json({ error: "order not found" });
    else return res.status(200).json({ data: order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateOrder(req, res) {
  try {
    const order_data = req.body;
    const newOrder = await Model.createOrder(order_data);
    res.status(201).json({ data: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
