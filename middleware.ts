import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  });
  if (!session && path.includes("/articles/referral")) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (session && path === "/") {
    return NextResponse.redirect(new URL("/articles/referral", req.url));
  }
  return NextResponse.next();
}
