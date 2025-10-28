import * as Model from "../models/category.model.js";

export async function handleGetAllCategories(req, res) {
  try {
    const categories = await Model.getAllCategories();
    res.status(200).json({ data: categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetCategoryById(req, res) {
  try {
    const category_id = req.params.id;
    const category = await Model.getCategoryByID(category_id);
    if (!category) return res.status(404).json({ error: "category not found" });
    else return res.status(200).json({ data: category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateCategory(req, res) {
  try {
    const category_data = req.body;
    const newCategory = await Model.createCategory(category_data);
    res.status(201).json({ data: newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
