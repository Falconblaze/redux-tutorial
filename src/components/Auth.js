import { useDispatch } from "react-redux";

import "./auth.scss";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "login" });
  };

  return (
    <main className="auth">
      <section>
        <form onSubmit={loginHandler}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
