import { createPost, getPosts, approveRejectPost } from "../services/post.service.js";

export const createPostController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const post = await createPost(req.user.id, title, content);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

export const getPostsController = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const data = await getPosts({ status, authorId: req.user.id }, parseInt(page), parseInt(limit));
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const approveRejectController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { status, reason } = req.body;
    const post = await approveRejectPost(postId, status, reason);
    res.json(post);
  } catch (err) {
    next(err);
  }
};
