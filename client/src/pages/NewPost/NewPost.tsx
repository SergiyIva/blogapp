import React, { useEffect } from "react";
import { ApolloCache, ApolloClient, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ContainerRedirect } from "../../Components/ContainerRedirect";
import { NEW_POST } from "../../graphql/Mutation";
import { PostForm } from "../../Components/PostForm/PostForm";
import { GET_MY_POSTS, GET_POSTS } from "../../graphql/Query";
import { GetPostsQuery, PostFeed } from "../../gql/graphql";

const NewPost = () => {
  const navigate = useNavigate();

  const [dataMut, { loading, error, client }] = useMutation(NEW_POST, {
    onCompleted: (data) => {
      navigate(`/post/${data.newPost.id}`);
      const posts = client.cache.readQuery({
        query: GET_POSTS,
        variables: {
          cursor: 0
        }
      });
      if (!posts) return;
      const newPosts: GetPostsQuery = {
        getPosts: {
          totalPosts: posts.getPosts.totalPosts + 1,
          posts: [data.newPost, ...posts.getPosts.posts]
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

  useEffect(() => {
    document.title = "BlogApp | Новый пост";
  }, []);
  if (error) return <p>Ошибка при отправке данных!</p>;
  if (loading) return <p>Загрузка...</p>;
  return (
    <div>
      <h2>Новый пост</h2>
      <PostForm action={dataMut} />
    </div>
  );
};

export default function ContainerNewPost() {
  return (
    <ContainerRedirect>
      <NewPost />
    </ContainerRedirect>
  );
}
