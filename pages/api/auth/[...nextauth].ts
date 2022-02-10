import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

import { LOGIN_URL } from "@/lib/spotify";

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
     * This callback is called whenever a JSON Web Token is created (i.e. at sign in)
     * or updated (i.e whenever a session is accessed in the client).
     */
    async jwt({ token, account }) {
      console.log(account);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    /**
     * The session callback is called whenever a session is checked.
     * E.g. when calling getSession() or useSession()
     */
    async session({ session, token }) {
      // Send access token to the client properties to the client
      session.access_token = token.access_token;
      return session;
    },
  },
});
