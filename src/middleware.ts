import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    // Check for the auth0 session cookie
    const sessionCookie = request.cookies.get('appSession');
    
    // If no session cookie is present, redirect to login
    if (!sessionCookie) {
      console.log('No session cookie found, redirecting to login');
      const loginUrl = new URL('/api/auth/login', request.url);
      loginUrl.searchParams.set('returnTo', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // If session cookie exists, allow access to protected route
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    
    // In case of error, redirect to home page
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/profile/:path*'],
}; 