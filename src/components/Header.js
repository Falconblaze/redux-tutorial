import { useDispatch, useSelector } from "react-redux";

import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const logoutHandler = () => {
    dispatch({ type: "logout" });
  };

  return (
    <header className="header">
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
