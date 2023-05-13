import { FC } from "react";
import { IError } from "../ErrorBoundary/ErrorBoundary";

export const ErrorScreen: FC<IError> = ({ error }) => {
  return (
    <div className={"container pt-5"}>
      <h3>Что-то пошло не так...</h3>
      <p>Мы не можем дать ответ на Ваш запрос в этот момент.</p>
      <p>ERROR: {error.message}</p>
      <p>Попробуйте перезагрузить страницу.</p>
    </div>
  );
};
