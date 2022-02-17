import { NextRequest, NextResponse } from 'next/server';

// Redirects, for example, /numa to the restaurant page.
// Used for QR codes and so on.
const restaurantRedirectMap = [
  {
    regex: /^\/numa(\?.*)?/,
    redirectTo: '/london/middle_eastern/numa-cafe-mill-hill',
  },
  {
    regex: /^\/el-vaquero(\?.*)?/,
    redirectTo: '/london/brazilian/el-vaquero-mill-hill',
  },
];

export function middleware(request: NextRequest) {
  let redirect: string | null = null;

  restaurantRedirectMap.forEach(({ regex, redirectTo }) => {
    if (regex.test(request.url)) {
      redirect = redirectTo;
    }
  });

  // We should also take into account the ?notifications=true
  // parameter which brings up the follow modal.
  // and forward this info to the redirect
  if (redirect) {
    // Add hasAccess=true to cookies.
    const res = NextResponse.rewrite(redirect + request.nextUrl.search);
    res.cookie('hasAccess', 'true');

    return res;
  }

  // Beware loops when redirecting to the same directory
  return NextResponse.next();
}
