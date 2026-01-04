import prisma from "../../prisma/client.js";
import { hashPassword } from "./auth.service.js";

export const createUser = async (email, role = "USER") => {
  return await prisma.user.create({
    data: { email, role },
  });
};

export const setPassword = async (userId, password) => {
  const hashed = await hashPassword(password);
  return await prisma.user.update({
    where: { id: userId },
    data: { password: hashed },
  });
};

export const getUsers = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const users = await prisma.user.findMany({ skip, take: limit });
  const total = await prisma.user.count();
  return { users, total, page, limit };
};
