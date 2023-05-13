import React from "react";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN, IsLoggedIn } from "../../graphql/Query";
import { useNavigate } from "react-router-dom";
import { LogAndSign } from "./LogAndSign/LogAngSign";
import * as S from "./Styles";
import { FaRegEdit } from "react-icons/fa";

export const Header = () => {
  const { data, client } = useQuery<IsLoggedIn>(IS_LOGGED_IN);
  const navigate = useNavigate();
  const logOut = () => {
    client.cache.evict({ fieldName: "getMe" });
    client.cache.gc();
    localStorage.removeItem("token");
    client.cache.writeQuery({
      query: IS_LOGGED_IN,
      data: {
        isLoggedIn: false
      }
    });
    navigate("/");
  };
  return (
    <S.HeaderBar>
      <S.LogoText to={"/"}>
        <FaRegEdit />
        BlogApp
      </S.LogoText>
      <LogAndSign isLoggedIn={data!.isLoggedIn} logOut={logOut} />
    </S.HeaderBar>
  );
};
