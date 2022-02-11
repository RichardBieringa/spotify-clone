import Head from "next/head";

import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Player from "@/components/Player";
import Profile from "@/components/Profile";
import React from "react";

interface Props {
  playlists?: SpotifyApi.PlaylistObjectSimplified[];
  children?: React.ReactNode;
}

const AppLayout = ({ children, playlists = [] }: Props) => {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
      <main className="flex h-screen w-screen flex-col flex-nowrap overflow-hidden bg-black">
        <section className="flex h-full min-h-0 flex-shrink flex-row">
          {/* Navigation */}
          <nav className="flex w-64 flex-col">
            <Sidebar playlists={playlists} />
          </nav>

          {/* Main Area */}
          <div className="relative h-full grow bg-white">{children}</div>
        </section>

        {/* Player */}
        <section className="basis-24 bg-gray-700">
          <Player />
        </section>
      </main>
    </>
  );
};

export default AppLayout;
