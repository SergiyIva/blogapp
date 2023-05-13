import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Styles";
import { Post as PostType } from "../../../gql/graphql";
import { Post } from "./Post/Post";

type PostFeedProps = {
  posts: PostType[];
};
export const PostFeed = ({ posts }: PostFeedProps) => {
  return (
    <div>
      {posts.map((post) => (
        <S.PostWrapper key={post.id}>
          <Post post={post} isFull={false} />
          <Link to={`/post/${post.id}`}>Читать полностью</Link>
        </S.PostWrapper>
      ))}
    </div>
  );
};
