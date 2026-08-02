import { withAuth } from "next-auth/middleware";



export default withAuth(
  function middleware(req) {
    // runs AFTER authorization success
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        
        const { pathname } = req.nextUrl;
  
        if (
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/login") ||
          pathname.startsWith("/register")
        ) {
          return true;
        }

        
         if (!token) {
            return Response.redirect(
              new URL(`/login?callbackUrl=${encodeURIComponent(req.nextUrl.pathname)}`, req.url)
            );
          }

        if (token.exp && token.exp * 1000 < Date.now()) {
          return Response.redirect(
            new URL(`/login?callbackUrl=${encodeURIComponent(req.nextUrl.pathname)}`, req.url)
          );
        }

        // 👑 Admin protection
        if (pathname.startsWith("/admin")) {
          return token.role === "admin";
        }

        // ✅ Logged-in pages
        if (
          pathname.startsWith("/dashboard") ||
          pathname.startsWith("/cart") ||
          pathname.startsWith("/profile") ||
          pathname.startsWith("/checkout")
        ) {
          return true;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/orders/:path*",
    "/profile/:path*",
    "/admin/:path*",
    "/checkout/:path*",
  ],
};