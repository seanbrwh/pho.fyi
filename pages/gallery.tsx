import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Gallery: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Head>
        <title>Pho Moon Art Creations | Gallery</title>
        <meta
          name="description"
          content="A website to showcase art as well as sell it"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <h1>Gallery</h1>
    </div>
  );
};

Gallery.getLayout = function getLayout(gallery: ReactElement) {
  return <Layout>{gallery}</Layout>;
};

export default Gallery;
