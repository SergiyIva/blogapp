import Query from "./query.js";
import Mutation from "./mutation.js";
import Post from "./post.js";
import User from "./user.js";
import { Resolvers } from "../generated/graphql";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import { GraphQLDateTime } from "graphql-scalars";

const resolvers: Resolvers = {
  Query,
  Mutation,
  Post,
  User,
  DateTime: GraphQLDateTime,
  Upload: GraphQLUpload
};

export default resolvers;
