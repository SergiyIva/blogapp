import React from "react";
import { Link } from "react-router-dom";
import { ButtonAsLink } from "../../../styles/components/ButtonAsLink";
import * as S from "./Styles";
import { User } from "./User/User";

type LogAngSignProps = {
  isLoggedIn: boolean;
  logOut: () => void;
};
export const LogAndSign = ({ isLoggedIn, logOut }: LogAngSignProps) => {
  return (
    <S.UserState>
      {isLoggedIn ? (
        <S.FlexDivider>
          <User />
          <ButtonAsLink onClick={logOut}>Выйти</ButtonAsLink>
        </S.FlexDivider>
      ) : (
        <S.Paragraph>
          <Link to={"/signin"}>Войти</Link> <S.Slash>/</S.Slash>
          <Link to={"/signup"}>Регистрация</Link>
        </S.Paragraph>
      )}
    </S.UserState>
  );
};
