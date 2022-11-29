import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Page: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full p-10 mt-20">
      <Head>
        <title>Pho Moon Art Creations | A place to view and buy art</title>
        <meta
          name="description"
          content="A website to showcase art as well as sell it"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
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
      <div className="grid grid-cols-6 grid-rows-6 gap-10 w-full h-full pb-20">
        <div className="border-solid border-2 border-primary col-span-6 row-span-2 flex justify-center items-center berfore:content-[attr(before)]">
          About
        </div>
        <div className="border-solid border-2 border-primary col-span-4 row-span-2 flex justify-center items-center">
          Gallery
        </div>
        <div className="border-solid border-2 border-primary row-start-5 col-start-3 col-span-4 row-span-2 flex justify-center items-center">
          Shop
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-4 gap-10 w-full h-full pb-20">
        <div className="border-solid border-2 border-primary col-span-6 row-span-2 flex justify-center items-center berfore:content-[attr(before)]">
          Blog
        </div>
        <div className="border-solid border-2 border-primary col-span-4 row-span-2 col-start-3 flex justify-center items-center">
          Contact
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
