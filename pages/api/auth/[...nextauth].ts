import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";

import spotifyClient, { LOGIN_URL } from "@/lib/spotify";

/**
 * Refreshes thes access token for the spotify OAuth connection
 */
const refreshAccessToken = async (token: JWT) => {
  if (
    typeof token.access_token === "undefined" ||
    typeof token.refresh_token === "undefined"
  ) {
    console.error("No access token or refresh token present in JWT.");
    return token;
  }

  try {
    // Tries to get a new access token from spotify
    spotifyClient.setAccessToken(token.access_token);
    spotifyClient.setRefreshToken(token.refresh_token);
    const { body: responseToken } = await spotifyClient.refreshAccessToken();

    // Updates the new token to include the new token
    const now = Date.now();
    const newToken: JWT = {
      ...token,
      expires_at: responseToken.expires_in + now,
      ...responseToken,
    };

    return newToken;
  } catch (err) {
    console.error("An error occured while refreshing access_token.");
    console.error(err);
    return token;
  }
};

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_API_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_API_CLIENT_SECRET!,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    /**
     *  This is called whenever a JSON web token is created or updated.
     */
    async jwt({ token, user, account }) {
      const now = Date.now();

      // First Sign In
      if (account && user) {
        // Spotify returns the time in seconds rather than Date.now()'s ms
        const expireTimeInSeconds = account.expires_at! * 1000;

        return {
          ...token,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: expireTimeInSeconds,
        };
      }

      // Expired token
      const expired = token.expires_at!;
      if (expired < now) {
        return await refreshAccessToken(token);
      }

      // Token still valid
      return token;
    },
  },
});
