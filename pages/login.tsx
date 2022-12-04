import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <form action="/login/password" method="post">
        <section>
          <label>Username</label>
          <input id="username" name="username" type="text" required />
        </section>
        <section>
          <label>Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            required
          />
        </section>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

Login.getLayout = function getLayout(shop: ReactElement) {
  return <Layout>{shop}</Layout>;
};

export default Login;
