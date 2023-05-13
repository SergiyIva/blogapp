import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PostFeed } from "./PostFeed/PostFeed";
import { GET_POSTS } from "../../graphql/Query";
import { PaginateComponent } from "./PaginateComponent/PaginateComponent";

const Home = () => {
  const params = useParams();
  const cursor = Number(params.page) - 1 || 0;
  const { data, loading, error } = useQuery(GET_POSTS, {
    pollInterval: 1000,
    variables: {
      cursor
    },
    onError: (err) => console.log(err)
  });

  const currentPage = Number(params.page) || 1;

  useEffect(() => {
    document.title = "BlogApp | Главная";
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) return <div>Произошла ошибка при получении данных!</div>;
  if (!data || !data.getPosts.posts.length)
    return <div>Ни одного поста не опубликовано.</div>;
  return (
    <>
      <PaginateComponent
        onPageFrom={currentPage * 20 - 19}
        onPageToMax={currentPage * 20}
        total={data.getPosts.totalPosts}
        currentPage={currentPage}
      />
      <PostFeed posts={data.getPosts.posts} />
      <PaginateComponent
        isFooter={true}
        onPageFrom={currentPage * 20 - 19}
        onPageToMax={currentPage * 20}
        total={data.getPosts.totalPosts}
        currentPage={currentPage}
      />
    </>
  );
};
export default Home;
