import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

import Sidebar from "@/components/Sidebar";

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

      <main className="container">
        <Sidebar />

        {/* APP */}
      </main>
      {/* Player */}
    </div>
  );
};

export default Home;
