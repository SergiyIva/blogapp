import { Layout } from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Home from "./Home/Home";
import NewPost from "./NewPost/NewPost";
import EditPost from "./EditPost/EditPost";
import { PostPage } from "./PostPage/PostPage";
import MyPost from "./MyPosts/MyPosts";

export const Pages = () => {
  const home = <Home />;
  const newPost = <NewPost />;
  const editPost = <EditPost />;
  const postPage = <PostPage />;
  const myPosts = <MyPost />;
  const signUp = <SignUp />;
  const signIn = <SignIn />;
  return (
    <Layout>
      <Routes>
        <Route index={true} path={"/"} element={home} />
        <Route path={"/home/:page"} element={home} />
        <Route path={"/signup"} element={signUp} />
        <Route path={"/myposts"} element={myPosts} />
        <Route path={"/new"} element={newPost} />
        <Route path={"/post/:id"} element={postPage} />
        <Route path={"/edit/:id"} element={editPost} />
        <Route path={"/signin"} element={signIn} />
        <Route
          path={"/*"}
          element={
            <div>
              Ошибка 404
              <br />
              Данная страница не существует.
            </div>
          }
        />
      </Routes>
    </Layout>
  );
};
