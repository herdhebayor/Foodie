# Fix localhost:3000 / CORS issue in production

- [x] 1. Refactor `utils/apiUrl.js` so client requests are always same-origin
      (use `window.location.origin`) and server-side returns relative URLs;
      stop using `NEXT_PUBLIC_DOMAIN` / `NEXTAUTH_URL` as API base.
- [x] 2. Update `.env` to remove/comment `NEXT_PUBLIC_DOMAIN` and
      `NEXT_PUBLIC_API_DOMAIN` localhost values (keep `NEXTAUTH_URL`).
- [x] 3. Fix `utils/cors.js` allowed origins (remove trailing slash on the
      Vercel domain so the defensive CORS header is valid).
- [x] 4. Fix `app/api/user/getOrders/route.js` (remove client-only `react-toastify`
      and align with `getCurrentUserOrders` from `@/lib/userService`).
- [x] 5. Verify with `npm run lint` / `npm run build`.

