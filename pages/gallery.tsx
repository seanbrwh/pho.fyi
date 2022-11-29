import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Gallery: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Gallery</h1>
    </div>
  );
};

Gallery.getLayout = function getLayout(gallery: ReactElement) {
  return <Layout>{gallery}</Layout>;
};

export default Gallery;
