import React from "react";
import { useQuery } from "@apollo/client";
import * as S from "./Styles";
import { Post as PostType } from "../../../../gql/graphql";
import { IS_LOGGED_IN } from "../../../../graphql/Query";
import { FaStickyNote } from "react-icons/fa";
import { PostUser } from "./PostUser/PostUser";

type PostProps = {
  post: PostType;
  isFull: boolean;
};
export const Post = ({ post, isFull }: PostProps) => {
  const { data } = useQuery(IS_LOGGED_IN);
  const content =
    isFull || post.content.length <= 500
      ? post.content
      : post.content.substring(0, 500) + "...";

  return (
    <S.StyledNote>
      <S.MetaData>
        <S.FlexDivider>
          <S.MetaInfo>
            <FaStickyNote />
          </S.MetaInfo>
          <S.MetaInfo>
            <em>от</em> {post.author.username} <br />
            {new Date(post.createdAt).toLocaleString()}
          </S.MetaInfo>
        </S.FlexDivider>

        {data && data.isLoggedIn && (
          <S.UserActions>
            <PostUser post={post} />
          </S.UserActions>
        )}
      </S.MetaData>
      <h2>{post.title}</h2>
      {post.media && (
        <>
          <S.Image
            src={`${process.env.REACT_APP_URI}${post.media}`}
            alt={post.media}
          />
          <br />
        </>
      )}
      <div>
        {content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </S.StyledNote>
  );
};
