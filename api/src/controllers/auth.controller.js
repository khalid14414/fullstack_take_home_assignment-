import { login, refreshToken, hashPassword } from "../services/auth.service.js";
import prisma from "../../prisma/client.js";

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
