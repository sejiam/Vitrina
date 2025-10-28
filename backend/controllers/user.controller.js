import * as Model from "../models/user.model.js";

export async function handleGetAllUsers(req, res) {
  try {
    const users = await Model.getAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetUserById(req, res) {
  try {
    const user_id = req.params.id;
    const user = await Model.getUserByID(user_id);
    if (!user) return res.status(404).json({ error: "user not found" });
    else return res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateUser(req, res) {
  try {
    const user_data = req.body;
    const newUser = await Model.createUser(user_data);
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
