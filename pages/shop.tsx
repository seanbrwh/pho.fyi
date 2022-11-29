import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Head from "next/head";

const Shop: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Head>
        <title>Shop</title>
      </Head>
      <h1>Shop</h1>
    </div>
  );
};

Shop.getLayout = function getLayout(shop: ReactElement) {
  return <Layout>{shop}</Layout>;
};

export default Shop;
