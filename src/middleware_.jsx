import { NextResponse } from 'next/server'

export function middleware_(request) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
    default-src 'self' http: https: [2409:40e0:114a:4642:a994:9151:f94c:8195] ;
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: http: 'unsafe-eval' blob: ;
    style-src 'self' 'nonce-${nonce}' ;
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    media-src youtube.com;
    frame-src *.google.com youtube.com www.youtube.com 'nonce-${nonce}';
    frame-ancestors 'none' google.com;
    connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com data: blob:;
    block-all-mixed-content;
    upgrade-insecure-requests;
`
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim()

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
    response.headers.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    )

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
}