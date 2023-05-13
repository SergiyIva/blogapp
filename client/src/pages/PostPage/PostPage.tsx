import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../graphql/Query";
import { Post } from "../Home/PostFeed/Post/Post";
import { useEffect } from "react";

export const PostPage = () => {
  const params = useParams();
  const id = params.id!;

  const { data, loading, error } = useQuery(GET_POST, { variables: { id } });

  useEffect(() => {
    document.title = "BlogApp | Пост";
  }, []);
  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) return <div>Ошибка!</div>;
  if (!data || !data.getPost) return <div>Пост не найден!</div>;
  return (
    <div>
      <Post post={data.getPost} isFull={true} />
    </div>
  );
};
