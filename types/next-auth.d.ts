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
