import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Post } from "../../../../../gql/graphql";
import { GET_ME } from "../../../../../graphql/Query";
import { DeletePost } from "./DeletePost/DeletePost";

type PostUserProps = {
  post: Post;
};
export const PostUser = ({ post }: PostUserProps) => {
  const { data, loading, error } = useQuery(GET_ME, {
    onError: (error) => {
      console.log(error);
    }
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка! {error.message}</p>;
  if (!data) return <p>Данные не получены!</p>;
  return (
    <>
      {data.getMe && data.getMe.id === post.author.id && (
        <>
          <Link to={`/edit/${post.id}`}>Редактировать</Link> <br />
          <DeletePost postId={post.id} />
        </>
      )}
    </>
  );
};
