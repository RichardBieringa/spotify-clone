import { useEffect } from "react";
import { useSession } from "next-auth/react";
import spotifyClient from "../lib/spotify";

export default function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.access_token) {
      spotifyClient.setAccessToken(session.access_token as string);
    }
  }, [session]);

  return spotifyClient;
}
