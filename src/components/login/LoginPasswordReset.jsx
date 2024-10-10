import React from "react";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import Input from "../Forms/Input";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) {
      setKey(key);
    }
    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title='Resete a senha' />

      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Enviando</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
