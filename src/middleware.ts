import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./libs/sign-token";

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
    email: string;
  };
}

let redirectToLogin = false;

const AUTH_PAGES = ['/login', '/register'];

const isAuthPages = (url: string) =>
    AUTH_PAGES.some((page) => page.startsWith(url));

export default async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;

  let { value: token } = cookies.get('token') ?? { value: null };

  if (!token) {
    token = req?.headers?.get("Authorization")?.substring(7) || null;
  }

  if (nextUrl.pathname.startsWith("/login" || "/register") && (!token || redirectToLogin)) {
    return
  }

  if (nextUrl.pathname === "/" || nextUrl.pathname === "/register"  && !token) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  try {
    if (token) {
      const { sub, email } = await verifyJWT<{ sub: string; email: string }>(token);
      console.log("USER ID: ", sub)
      console.log("USER EMAIL: ", email)

      response.headers.set("USER-ID", sub);
      response.headers.set("USER-EMAIL", email);

      (req as AuthenticatedRequest).user = { id: sub, email }
    }
  } catch (error) {
    console.error("Token verification failed:", error);

    console.log("Redirecting to auth");
    return NextResponse.redirect(
      new URL(`/login?${new URLSearchParams({ error: "badauth" })}`, nextUrl.href)
    );
  }

  const authUser = (req as AuthenticatedRequest).user;

  console.log("Authenticated user:", authUser);

  if (!authUser && nextUrl.pathname !== "/register") {
    console.log("Unauthorized: Not authenticated, redirecting to register");
    return NextResponse.redirect(
      new URL(
        `/register?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        nextUrl.href
      )
    );
  }

  if (!authUser && nextUrl.pathname !== "/login") {
    console.log("Unauthorized: Not authenticated, redirecting to login");
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        nextUrl.href
      )
    );
  }

  if (nextUrl.pathname === "/login" || nextUrl.pathname === "/register" && authUser) {
    console.log("Redirecting authenticated user to feed");
    return NextResponse.redirect(new URL("/feed", nextUrl.href));
  }

  console.log("Allowing access to: ", nextUrl.pathname)
  return response
}

export const config = {
  matcher: [
    "/",
    "/feed/:path*",
    "/user/:path*",
    "/login",
    "/register"
  ]
}