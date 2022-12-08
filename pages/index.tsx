import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import Layout from "../components/layout";
import Contact from "../components/contact";
import CarouselItem from "../components/carousel/carouselItem";
import InfiniteCarousel from "../components/carousel/infiniteCarousel";

const Home: NextPageWithLayout = () => {
  // TODO useSWR
  // https://swr.vercel.app/docs/with-nextjs
  // prisma example
  // const { data, error } = useSWR("/api/posts", fetcher);
  // if (error) return <div>An error occured</div>;
  // if (!data) return <div>Loading ...</div>;
  return (
    <div className="w-full h-full p-10 mt-20">
      <Head>
        <title>Pho Moon Art Creations | A place to view and buy art</title>
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
      <div className="grid grid-cols-6 grid-rows-6 gap-10 w-full h-full pb-20">
        <div className="rounded-md shadow-xl  col-span-6 row-span-2 flex justify-center items-center berfore:content-[attr(before)]">
          About
          <br />
        </div>
        <div className="col-span-4 row-span-2 flex justify-center items-center">
          <div className="w-full max-h-fit">
            <InfiniteCarousel>
              <CarouselItem>
                <div>Item 1</div>
              </CarouselItem>
              <CarouselItem>
                <div>Item 2</div>
              </CarouselItem>
              <CarouselItem>
                <div>Item 3</div>
              </CarouselItem>
              <CarouselItem>
                <div>Item 4</div>
              </CarouselItem>
            </InfiniteCarousel>
          </div>
        </div>
        <div className=" rounded-md shadow-xl  row-start-5 col-start-3 col-span-4 row-span-2 flex justify-center items-center">
          Shop
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-4 gap-10 w-full h-full pb-20">
        <div className=" rounded-md shadow-xl col-span-4 row-span-2 flex justify-center items-center berfore:content-[attr(before)]">
          Blog
        </div>
        <div className="col-span-6 row-span-4 flex justify-center items-center">
          <Contact />
        </div>
      </div>
    </div>
  );
};

// Prisma example

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const posts = await prisma.blog.findMany();

//   return {
//     props: { posts },
//   };
// }

// export const getServerSideProps = async ({ req }: { req: any }) => {
//   const prisma = new PrismaClient();
//   const token = req.headers.AUTHORIZATION;
//   const userId = await getUserId(token);
//   const posts = await prisma.blog.findMany({
//     where: { comment_id: userId },
//   });

//   return {
//     props: { posts },
//   };
// };

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
