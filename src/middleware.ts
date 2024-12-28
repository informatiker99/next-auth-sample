import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    console.log("yes");
    console.log(request.cookies.has("name"));

    // return NextResponse.rewrite(new URL("/admin", request.url));
  }
}
