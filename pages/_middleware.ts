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
    redirectTo: '/london/brazilian/el-vaquero-mill-hill/',
  },
];

export function middleware(request: NextRequest) {
  let redirect: string | null = null;

  restaurantRedirectMap.forEach(({ regex, redirectTo }) => {
    if (regex.test(request.url)) {
      redirect = redirectTo;
    }
  });

  if (redirect) {
    return NextResponse.redirect(redirect);
  }

  // Beware loops when redirecting to the same directory
  return NextResponse.next();
}
