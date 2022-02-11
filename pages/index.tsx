import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import useSpotify from "@/hooks/useSpotify";
import Layout from "@/components/Layout";
import Main from "@/components/Main";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // Fetch the user's playlists and update them in the state object
      spotifyApi
        .getUserPlaylists()
        .then((data) => {
          if (data.body.items) {
            setPlaylists(data.body.items);
          }
        })
        .catch(console.log);
    }
  }, [session, spotifyApi]);

  return (
    <Layout playlists={playlists}>
      <Main></Main>
    </Layout>
  );
};

export default Home;
