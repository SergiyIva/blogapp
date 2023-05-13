import { ContainerRedirect } from "../../Components/ContainerRedirect";
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_POSTS } from "../../graphql/Query";
import { PostFeed } from "../Home/PostFeed/PostFeed";

const MyPosts = () => {
  const { data, loading, error } = useQuery(GET_MY_POSTS);
  useEffect(() => {
    document.title = "BlogApp | Мои посты";
  }, []);
  if (error) return <div>Ошибка при отправке данных!</div>;
  if (loading) return <div>Загрузка...</div>;
  if (!data || !data.getMe || !data.getMe.posts)
    return <div>Данные не получены</div>;
  if (!data.getMe.posts.length)
    return <div>Вы не опубликовали ни одного поста.</div>;
  return <PostFeed posts={data.getMe.posts} />;
};
export default function ContainerMyPost() {
  return (
    <ContainerRedirect>
      <MyPosts />
    </ContainerRedirect>
  );
}
