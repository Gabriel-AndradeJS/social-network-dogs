import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordReset from "./LoginPasswordReset";
import Logincreate from "./Logincreate";
import { Usercontext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";
import LoginPasswordLost from "./LoginPasswordLost";

const Login = () => {
  const { login } = React.useContext(Usercontext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<Logincreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
