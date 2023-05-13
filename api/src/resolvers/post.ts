import { PostResolvers } from "../generated/graphql";

const post: PostResolvers = {
  author: async (post, args, { models }) => {
    return models.User.findById(post.author);
  }
};

export default post;
