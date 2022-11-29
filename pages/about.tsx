import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const About: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </div>
  );
};

About.getLayout = function getLayout(about: ReactElement) {
  return <Layout>{about}</Layout>;
};

export default About;
