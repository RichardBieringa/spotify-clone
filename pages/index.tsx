import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Player from "@/components/Player";
import TopNav from "@/components/TopNav";
import useSpotify from "@/hooks/useSpotify";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // Fetch the user's playlists and update them in the state object
      spotifyApi.getUserPlaylists().then((data) => {
        if (data.body.items) {
          setPlaylists(data.body.items);
        }
      });
    }
  }, [session, spotifyApi]);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-screen flex-col flex-nowrap overflow-hidden bg-black">
        <section className="flex h-full min-h-0 flex-shrink flex-row">
          {/* Navigation */}
          <nav className="flex w-64 flex-col">
            <Sidebar playlists={playlists} />
          </nav>

          {/* Main Area */}
          <div className="relative h-full grow bg-white">
            <TopNav />
            <Main />
          </div>
        </section>

        {/* Player */}
        <section className="basis-24 bg-gray-700">
          <Player />
        </section>
      </main>
    </>
  );
};

export default Home;
