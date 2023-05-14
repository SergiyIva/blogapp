const user = {
    posts: async (user, args, { models }) => {
        return models.Post.find({ author: user.id }).sort({
            _id: -1
        });
    }
};
export default user;
