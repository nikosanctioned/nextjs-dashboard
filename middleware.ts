import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';

export default NextAuth(authConfig).auth;
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes('/personal')) {
    return NextResponse.rewrite(new URL('/dashboard/customers', request.url));
  }
}

let headers = { 'accept-language': 'en-US,en;q=0.5' };
let languages = new Negotiator({ headers }).languages();
console.log('languages89', languages);

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
