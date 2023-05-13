import React, { useEffect, useState } from "react";
import * as S from "./Styles";
import { useFormInput } from "../../hooks/useFormInput";
import { MutationTuple } from "@apollo/client";
import {
  SignInMutation,
  SignInMutationVariables,
  SignUpMutation,
  SignUpMutationVariables
} from "../../gql/graphql";
import Button from "../../styles/components/Button";

type UserFormProps = {
  formType: "signin" | "signup";
  error?: string;
  action:
    | MutationTuple<SignUpMutation, SignUpMutationVariables>[0]
    | MutationTuple<SignInMutation, SignInMutationVariables>[0];
};

const isValid = ({
  username,
  password,
  repeatPassword
}: {
  username: string;
  password: string;
  repeatPassword: string;
}) => {
  if (!/\w/.test(username) && !/\p{Script=Cyrillic}+/u.test(username))
    return "Имя пользователя должно содержать буквы/цифры!";
  if (password.length < 4) return "Пароль должен быть длинее 4-х символов!";
  if (password !== repeatPassword) return "Пароли не совпадают!";
  return "VALID";
};
const UserForm = ({ formType, action, error }: UserFormProps) => {
  const [values, reset] = useFormInput({
    username: "",
    password: "",
    repeatPassword: ""
  });
  const [validationMessage, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formType === "signup") {
      const msg = isValid(values.value);
      if (msg !== "VALID") {
        setMessage(msg);
        return;
      }
    }
    await action({
      variables: {
        username: values.value.username,
        password: values.value.password
      }
    });
    reset();
  };

  useEffect(() => {
    if (error) setMessage(error);
  }, [error]);
  return (
    <S.Wrapper>
      <S.Heading>{formType === "signup" ? "Регистрация" : "Вход"}</S.Heading>

      <S.Form onSubmit={onSubmit}>
        <label htmlFor={"username"}>Имя пользователя:</label>
        <input
          required
          type={"text"}
          id={"username"}
          name={"username"}
          placeholder={"Имя пользователя"}
          onChange={values.onChange}
        />
        <label htmlFor={"password"}>Пароль:</label>
        <input
          required
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"Пароль"}
          onChange={values.onChange}
        />
        {formType === "signup" && (
          <>
            <label htmlFor={"repeatPassword"}>Повтор пароля:</label>
            <input
              required
              type={"password"}
              id={"repeatPassword"}
              name={"repeatPassword"}
              placeholder={"Повтор пароля"}
              onChange={values.onChange}
            />
          </>
        )}
        <S.Error>{validationMessage}</S.Error>
        <S.BtnDivider>
          <Button type={"submit"}>Отправить</Button>
        </S.BtnDivider>
      </S.Form>
    </S.Wrapper>
  );
};

export default UserForm;
