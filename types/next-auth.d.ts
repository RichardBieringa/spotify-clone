import NextAuth from "next-auth/jwt";

declare module "next-auth/jwt" {
  /**
   * Extended representation of the JWT to include accesstoken and refresh token
   */
  interface JWT {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    expires_at?: number;
    scope?: string;
    token_type?: string;
  }
}

declare module "next-auth" {
  /**
   * Extend the rerpesentation of the Session object in next-auth to include an access token.
   */
  interface Session {
    expires?: string;
    access_token?: string;
  }
}
