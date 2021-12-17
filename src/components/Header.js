import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.css";
import { authenticationActions } from "../store/authentication";

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
