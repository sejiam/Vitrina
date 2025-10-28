import * as Model from "../models/product.model.js";

export async function handleGetAllProducts(req, res) {
  try {
    const products = await Model.getAllProducts();
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function handleGetProductByID(req, res) {
  try {
    const product_id = req.params.id;
    const product = await Model.getProductByID(product_id);
    if (!product) return res.status(404).json({ error: "product not found" });
    else res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateProduct(req, res) {
  try {
    const product_data = req.body;
    const newProduct = await Model.createProduct(product_data);
    res.status(201).json({ data: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
