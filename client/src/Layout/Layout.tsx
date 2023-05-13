import React, { PropsWithChildren } from "react";
import Navigation from "./Navigation/Navigation";
import { Header } from "./Header/Header";
import * as S from "./Styles";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Navigation />
        <S.Main>{children}</S.Main>
      </S.Wrapper>
    </>
  );
};
