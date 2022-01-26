import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";

/**
 * Middleware to check if the user is authenticated.
 *
 * If the user is not authenticated, redirect to the login page.
 */
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // This is a bit of a hack, middleware receives NextRequest and getToken
  // requires type NextApiRequest. This works even though they are not compatible
  const apiRequest = req as unknown as NextApiRequest;

  // Gets the JWT token given the JWT secret
  const secret = process.env.JWT_SECRET;
  const token = await getToken({ req: apiRequest, secret });

  const path = req.nextUrl.pathname;

  // Skip middleware on files in public folder
  const isPublicFile = /\.(.*)$/.test(path);
  if (isPublicFile) return NextResponse.next();

  // The user is logged in
  if (token) {
    return NextResponse.next();
  }

  // The user is going through the authentication flow
  if (path.includes("/api/auth")) {
    return NextResponse.next();
  }

  // User is not logged in -> redirect to login page
  if (!token && path !== "/login") {
    return NextResponse.redirect("/login");
  }
}
