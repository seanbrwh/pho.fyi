import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";
import Carousel from "../components/carousel/carousel";
import InfiniteCarousel from "../components/carousel/infiniteCarousel";
import CarouselItem from "../components/carousel/carouselItem";
import Head from "next/head";
import SwipeableCarousel from "../components/carousel/swipeableCarousel";

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
      <div className="w-96 h-96 flex flex-col justify-center text-center">
        <h1 className="py-5">Gallery</h1>
        <div>
          <Carousel>
            <CarouselItem>
              <div>Item 1</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 2</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 3</div>
            </CarouselItem>
          </Carousel>
        </div>
        <div>
          <InfiniteCarousel>
            <CarouselItem>
              <div>Item 4</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 5</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 6</div>
            </CarouselItem>
          </InfiniteCarousel>
        </div>
        <div className="py-5">
          <SwipeableCarousel>
            <CarouselItem>
              <div>Item 7</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 8</div>
            </CarouselItem>
            <CarouselItem>
              <div>Item 9</div>
            </CarouselItem>
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
};

Gallery.getLayout = function getLayout(gallery: ReactElement) {
  return <Layout>{gallery}</Layout>;
};

export default Gallery;
