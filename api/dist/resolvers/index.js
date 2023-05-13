import Query from "./query.js";
import Mutation from "./mutation.js";
import Post from "./post.js";
import User from "./user.js";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import { GraphQLDateTime } from "graphql-scalars";
const resolvers = {
    Query,
    Mutation,
    Post,
    User,
    DateTime: GraphQLDateTime,
    Upload: GraphQLUpload
};
export default resolvers;
