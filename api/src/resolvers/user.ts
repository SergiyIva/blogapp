import { Post, UserResolvers } from "../generated/graphql";

const user: UserResolvers = {
  posts: async (user, args, { models }) => {
    return models.Post.find({ author: user.id }).sort({
      _id: -1
    }) as unknown as Post[];
  }
};

export default user;
