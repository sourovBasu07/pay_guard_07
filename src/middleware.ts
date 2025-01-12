import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = await createClient();
  // update user's auth session
  await updateSession(request);

  const data = await supabase.auth.getUser();
  const user = data?.data?.user;
  console.log("middleware", user);

  const publicPaths = ["/login", "/signup"];
  if (!user && !publicPaths.includes(request.nextUrl.pathname)) {
    const newUrl = new URL("/login", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (user && publicPaths.includes(request.nextUrl.pathname)) {
    const newUrl = new URL("/dashboard", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
