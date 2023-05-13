import { useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { PropsWithChildren, useEffect } from "react";
import { IS_LOGGED_IN } from "../graphql/Query";

export const ContainerRedirect = ({ children }: PropsWithChildren<any>) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (data && !data.isLoggedIn)
      navigate("/signin", { state: { from: location.pathname } });
  });

  if (error) return <div>Ошибка данных!</div>;
  if (loading || !data) return <div>Загрузка...</div>;
  return <>{data.isLoggedIn ? children : <div>Загрузка...</div>}</>;
};
