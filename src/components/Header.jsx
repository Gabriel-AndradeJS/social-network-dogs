import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import dogs from "../assets/dogs.svg";
import { Usercontext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(Usercontext);

  return (
    <header className={styles.header}>
      <nav className={`container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dogs} alt="Dogs" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
