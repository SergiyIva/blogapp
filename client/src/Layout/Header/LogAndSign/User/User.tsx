import { useQuery } from "@apollo/client";
import { GET_ME } from "../../../../graphql/Query";

export const User = () => {
  const { data, loading, error } = useQuery(GET_ME);
  if (loading) return <div>Загрузка...</div>;
  if (error || !data || !data.getMe)
    return <div>Ошибка при получении данных</div>;
  return <div>Здравствуйте, {data.getMe.username}</div>;
};
