import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import styles from "./StyledNavbarStyle.module.css";
import { getUserInfo, logout } from "../../store/actions/user/userActions";
import { useEffect } from "react";

const StyledNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  let user = useSelector((state) => state.authReducer.userInfo);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserInfo);
    }
  }, [getUserInfo, isAuthenticated]);

  return (
    <nav className={styles.navbar}>
      {user && (
        <div className={styles.userInfo}>
          {user.name} {user.surname}
        </div>
      )}

      <div className={styles.linksContainer}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Register
        </NavLink>

        {isAuthenticated && (
          <Button variant="success" onClick={() => dispatch(logout(navigate))}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default StyledNavbar;
