import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Player from "@/components/Player";
import Album from "@/components/Album";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-screen h-screen">
        <section className="flex grow">
          <div className="w-64 flex flex-col">
            <Sidebar />
            <Album />
          </div>
          <div className="grow">
            <Main />
          </div>
        </section>
        <section className="h-24 bg-gray-700">
          <Player />
        </section>
      </main>
    </div>
  );
};

export default Home;
