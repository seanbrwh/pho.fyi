import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Blog: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
    </div>
  );
};

Blog.getLayout = function getLayout(blog: ReactElement) {
  return <Layout>{blog}</Layout>;
};

export default Blog;
