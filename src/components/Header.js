import React from "react";
import { connect } from "react-redux";

import "./header.scss";

class Header extends React.Component {
  logoutHandler() {
    this.props.logout();
  }

  render() {
    return (
      <header className="header">
        <h1>Redux Auth</h1>
        {this.props.authenticated && (
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={this.logoutHandler.bind(this)}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "logout" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
