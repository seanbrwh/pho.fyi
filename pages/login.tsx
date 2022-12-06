import { ReactElement, useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";

import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import { useUser } from "../hooks/useUser";

const Login: NextPageWithLayout = () => {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-type": "appllication/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg("Incorrect username or password.");
    }
  }

  useEffect(() => {
    if (user) Router.push("/");
  }, [user]);

  return (
    <>
      <Head>
        <title>Pho Moon Art Creations | Login</title>
      </Head>
      <div className="flex justify-center items-center w-full h-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Pass****"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

Login.getLayout = function getLayout(login: ReactElement) {
  return <Layout>{login}</Layout>;
};

export default Login;
