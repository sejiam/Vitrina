import * as Model from "../models/cartItem.model.js";

export async function handleGetAllCartItems(req, res) {
  try {
    const cartItem = await Model.getAllCartItems();
    res.status(200).json({ data: cartItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetCartItemByID(req, res) {
  try {
    const cartItem_id = req.params.id;
    const cartItem = await Model.getCartItemByID(cartItem_id);
    if (!cartItem) return res.status(404).json({ error: "cartItem not found" });
    else return res.status(200).json({ data: cartItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateCartItem(req, res) {
  try {
    const cartItem_data = req.body;
    const newCartItem = await Model.createCartItem(cartItem_data);
    res.status(201).json({ data: newCartItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
