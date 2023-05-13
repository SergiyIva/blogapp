import React from "react";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonAsLink } from "../../../../../../styles/components/ButtonAsLink";
import { DELETE_POST } from "../../../../../../graphql/Mutation";
import { GET_MY_POSTS, GET_POSTS } from "../../../../../../graphql/Query";
import { GetPostsQuery } from "../../../../../../gql/graphql";

type DeletePostProps = {
  postId: string;
};
export const DeletePost = ({ postId }: DeletePostProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deleteNote, { client }] = useMutation(DELETE_POST, {
    variables: {
      id: postId
    },
    onCompleted: (data) => {
      if (location.pathname.includes("/post")) navigate("/");
      const posts = client.cache.readQuery({
        query: GET_POSTS,
        variables: {
          cursor: 0
        }
      });
      if (!posts) return;
      const newPosts: GetPostsQuery = {
        getPosts: {
          totalPosts: posts.getPosts.totalPosts - 1,
          posts: posts.getPosts.posts.filter((p) => p.id !== postId)
        }
      };
      client.writeQuery({
        query: GET_POSTS,
        variables: {
          cursor: 0
        },
        data: newPosts
      });
    },
    refetchQueries: [{ query: GET_MY_POSTS }]
  });
  const onClick = async () => {
    await deleteNote();
  };

  return <ButtonAsLink onClick={onClick}>Удалить пост</ButtonAsLink>;
};
