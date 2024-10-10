import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Usercontext } from "../../UserContext";
import {
  ChartNoAxesColumnDecreasing,
  LogOut,
  Newspaper,
  Plus,
} from "lucide-react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(Usercontext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <Newspaper />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <ChartNoAxesColumnDecreasing />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Plus />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <LogOut />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
