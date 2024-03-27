import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';

export default NextAuth(authConfig).auth;
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes('/personal')) {
    return NextResponse.rewrite(new URL('/dashboard/customers', request.url));
  }
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
