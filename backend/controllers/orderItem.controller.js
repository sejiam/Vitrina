import * as Model from "../models/orderItem.model.js";

export async function handleGetAllOrderItems(req, res) {
  try {
    const order_items = await Model.getAllOrderItems();
    res.status(200).json({ data: order_items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetOrderItemByID(req, res) {
  try {
    const orderItem_id = req.params.id;
    const orderItem = await Model.getOrderItemByID(orderItem_id);
    if (!orderItem)
      return res.status(404).json({ error: "orderItem not found" });
    else return res.status(200).json({ data: orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateOrderItem(req, res) {
  try {
    const orderItem_data = req.body;
    const newOrderItem = await Model.createOrderItem(orderItem_data);
    res.status(201).json({ data: newOrderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
