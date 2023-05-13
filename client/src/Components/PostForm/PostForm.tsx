import React from "react";
import * as S from "./Styles";
import { useFormInput } from "../../hooks/useFormInput";
import { MutationTuple } from "@apollo/client";
import Button from "../../styles/components/Button";
import {
  EditPostMutation,
  EditPostMutationVariables,
  NewPostMutation,
  NewPostMutationVariables
} from "../../gql/graphql";

type PostFormProps = {
  id?: string;
  title?: string;
  content?: string;
  action:
    | MutationTuple<NewPostMutation, NewPostMutationVariables>[0]
    | MutationTuple<EditPostMutation, EditPostMutationVariables>[0];
};
export const PostForm = ({ id, title, content, action }: PostFormProps) => {
  const [values, reset] = useFormInput({
    title: title || "",
    content: content || "",
    media: null
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await action({
      variables: {
        id: id!,
        ...values.value
      }
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <S.Label htmlFor={"title"}>Заголовок</S.Label>
        <S.Input
          required
          name={"title"}
          placeholder={"Заголовок"}
          value={values.value.title}
          onChange={values.onChange}
        />
        <S.Label htmlFor={"content"}>
          Содержание
          <br />
        </S.Label>
        <S.TextArea
          required
          name={"content"}
          placeholder={"Содержание"}
          value={values.value.content}
          onChange={values.onChange}
        />
        <S.Input
          type={"file"}
          name={"file"}
          accept={"image/*"}
          onChange={values.onChange}
        />
        <Button type={"submit"}>Отправить</Button>
      </S.Form>
    </S.Wrapper>
  );
};
