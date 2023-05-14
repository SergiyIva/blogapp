const post = {
    author: async (post, args, { models }) => {
        return models.User.findById(post.author);
    }
};
export default post;
