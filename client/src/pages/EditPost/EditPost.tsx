import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerRedirect } from "../../Components/ContainerRedirect";
import { EDIT_POST } from "../../graphql/Mutation";
import { PostForm } from "../../Components/PostForm/PostForm";
import { GET_POST } from "../../graphql/Query";

const EditPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id!;
  const {
    data,
    loading: loadingQuery,
    error: errorQuery
  } = useQuery(GET_POST, {
    variables: {
      id
    },
    onError: (err) => console.log(err)
  });
  const [dataMut, { loading, error }] = useMutation(EDIT_POST, {
    onCompleted: (data) => {
      navigate(`/post/${data.updatePost.id}`);
    }
  });

  useEffect(() => {
    document.title = "BlogApp | Изменить пост";
  }, []);
  if (error || errorQuery) return <div>Ошибка при отправке данных!</div>;
  if (loading || loadingQuery) return <div>Загрузка...</div>;
  if (!data || !data.getPost) return <div>Данные не получены</div>;
  return (
    <div>
      <h2>Изменить пост</h2>
      <PostForm
        action={dataMut}
        id={id}
        title={data.getPost.title}
        content={data.getPost.content}
      />
    </div>
  );
};

export default function ContainerEditPost() {
  return (
    <ContainerRedirect>
      <EditPost />
    </ContainerRedirect>
  );
}
