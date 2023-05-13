import { useEffect } from "react";
import { IS_LOGGED_IN } from "../../graphql/Query";
import { useMutation, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import UserForm from "../../Components/UserForm/UserForm";
import { SIGNUP_USER } from "../../graphql/Mutation";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useQuery(IS_LOGGED_IN);
  const [signUp, { loading, error, client }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      client.cache.writeQuery({
        query: IS_LOGGED_IN,
        data: { isLoggedIn: true }
      });
      if (location.state === null) navigate("/", { replace: true });
      else navigate(location.state.from, { replace: true });
    },
    onError: (err) => console.log(err)
  });

  useEffect(() => {
    if (data?.isLoggedIn) {
      navigate("/");
    }
  }, [data]);
  useEffect(() => {
    document.title = "BlogApp | Регистрация";
  }, []);

  if (loading) return <div>Загрузка...</div>;
  return (
    <>
      <UserForm action={signUp} formType={"signup"} error={error?.message} />
    </>
  );
};
export default SignUp;
