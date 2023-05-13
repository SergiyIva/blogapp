import mongoose from "mongoose";
import { Maybe, Scalars, User } from "../generated/graphql";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    media: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);
export type Post = {
  /** Author of the post */
  author: User;
  /** Text content of the post */
  content: Scalars["String"];
  /** Date of the creation */
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** Link for media data */
  media?: Maybe<Scalars["String"]>;
  /** Date of the updating */
  updatedAt: Scalars["DateTime"];
};
const Post = mongoose.model("Post", PostSchema);
export default Post;
