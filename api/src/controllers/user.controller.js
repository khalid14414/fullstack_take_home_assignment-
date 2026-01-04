import { createUser, getUsers, setPassword } from "../services/user.service.js";

export const createUserController = async (req, res, next) => {
  try {
    const { email, role } = req.body;
    const user = await createUser(email, role);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const setPasswordController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;
    const user = await setPassword(userId, password);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsersController = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await getUsers(parseInt(page), parseInt(limit));
    res.json(data);
  } catch (err) {
    next(err);
  }
};
