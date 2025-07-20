// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APP_ENGINE_DOMAIN_SUFFIX = '.uc.r.appspot.com'; // Adjust this if your region/environment changes
const CUSTOM_DOMAIN = 'harikrishnan.tech';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host');

    // Check if the host is the App Engine default domain
    if (host && host.endsWith(APP_ENGINE_DOMAIN_SUFFIX)) {
        // Construct the new URL with the custom domain and original path/query
        const newUrl = new URL(request.url);
        newUrl.host = CUSTOM_DOMAIN;
        newUrl.protocol = 'https:'; // Ensure HTTPS

        // Perform a 301 Permanent Redirect
        return NextResponse.redirect(newUrl.toString(), 301);
    }

    // If not the App Engine domain, continue to the Next.js application
    return NextResponse.next();
}

// You can also specify matcher to run middleware only on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};