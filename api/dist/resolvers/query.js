import { AuthorizationError } from "../lib/errors.js";
const query = {
    getUser: async (parent, { username }, { models }) => {
        return models.User.findOne({ username });
    },
    getPost: async (parent, { id }, { models }) => {
        return models.Post.findById(id);
    },
    getPosts: async (parent, { cursor }, { models }) => {
        const limit = 20;
        let skip = cursor || 0;
        const posts = (await models.Post.find({})
            .sort({ _id: -1 })
            .skip(skip * limit)
            .limit(limit));
        const totalPosts = await models.Post.countDocuments({});
        return {
            posts,
            totalPosts
        };
    },
    getMe: async (parent, args, { models, user }) => {
        const me = await models.User.findById(user.id);
        if (!me) {
            throw AuthorizationError;
        }
        return me;
    }
};
export default query;
