import prisma from "../../prisma/client.js";

export const createPost = async (userId, title, content) => {
  return await prisma.post.create({
    data: { authorId: userId, title, content },
  });
};

export const getPosts = async (filter = {}, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const where = {};
  if (filter.status) where.status = filter.status;
  if (filter.authorId) where.authorId = filter.authorId;

  const posts = await prisma.post.findMany({
    where,
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.post.count({ where });
  return { posts, total, page, limit };
};

export const approveRejectPost = async (postId, status, reason = null) => {
  return await prisma.post.update({
    where: { id: postId },
    data: { status, content: reason ? `${reason}\n${status}` : undefined },
  });
};
