import { withAuth } from "next-auth/middleware";

console.log("🔥 MIDDLEWARE LOADED");

export default withAuth(
  function middleware(req) {
    // runs AFTER authorization success
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        
        const { pathname } = req.nextUrl;
  
        // if (trigger === "update") {
        //   token.profileCompleted = session.profileCompleted;
        // }

        // 🔓 Public auth routes
        if (
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/login") ||
          pathname.startsWith("/register")
        ) {
          return true;
        }

        // ❌ Not logged in
         if (!token) {
            return Response.redirect(
              new URL("/login", req.url)
            );
          }

        // 👑 Admin protection
        if (pathname.startsWith("/admin")) {
          return token.role === "admin";
        }

        // 🧩 Profile onboarding protection
        const isOnboarding =
          pathname.startsWith("/onboarding");

        if (!token.profileCompleted && !isOnboarding) {
          return false;
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