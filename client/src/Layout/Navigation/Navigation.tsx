import React from "react";
import * as S from "./Styles";
import { FaPlus, FaLayerGroup, FaHighlighter } from "react-icons/fa";

const data = [
  {
    title: "Все записи",
    to: "/",
    icon: <FaLayerGroup />
  },
  {
    title: "Мои посты",
    to: "/myposts",
    icon: <FaHighlighter />
  },
  {
    title: "Новый пост",
    to: "/new",
    icon: <FaPlus />
  }
];
export default function Navigation() {
  return (
    <S.Nav>
      <S.NavList>
        {data.map(({ title, icon, to }) => (
          <li key={to}>
            <S.CustomLink to={to}>
              {icon}
              {title}
            </S.CustomLink>
          </li>
        ))}
      </S.NavList>
    </S.Nav>
  );
}
