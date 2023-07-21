import '@/styles/globals.css'
import '@/styles/splideCss.css'
import NextTopLoader from 'nextjs-toploader';
import { League_Spartan } from 'next/font/google'

import Provider from './provide'
import Navbar from '@/components/nav'
import Footer from '@/components/Footer'

const league = League_Spartan({ weight: '400', display: 'swap', subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL("http://localhost"),
    charSet: 'UTF-8',
    title: {
        template: 'Subham Sarkar - %s',
        default: 'Subham Sarkar',
    },
    description: 'Subham Sarkar is a self portrait branding website. Welcome to his journey of life. Stay tuned for being a part of his life.',
    manifest: '/manifest.webmanifest',
    keywords: "Subham Sarkar, personal potrait",
    themeColor: '#e5e5e5',
    viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover",
    openGraph: {
        url: 'http://localhost',
        title: 'Subham Sarkar',
        type: 'website',
        siteName: "Subham Sarkar",
        description: 'Subham Sarkar is a self portrait branding website. Welcome to his journey of life. Stay tuned for being a part of his life.',
        images: [
            {url: "http://localhost/android-chrome-192x192", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"192x192"},
            {url: "http://localhost/android-chrome-512x512", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"512x512"}
        ],
    },
    twitter:{
        card: "Subham Sarkar",
        title: 'Home',
        creator: "Subham Sarkar",
        description: 'Subham Sarkar is a self portrait branding website. Welcome to his journey of life. Stay tuned for being a part of his life.',
        images: [
            {url: "http://localhost/android-chrome-192x192", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"192x192"},
            {url: "http://localhost/android-chrome-512x512", alt: "Subham Sarkar | Logo", type: 'image/png', sizes:"512x512"}
        ],
    },
    icons:{
        icon: [
            {url: '/favicon.ico', type: "image/x-icon", rel:"icon"},
            {url: '/favicon-16x16.png', type: "image/png", sizes:"16x16", rel:"icon"},
            {url: '/favicon-32x32.png', type: "image/png", sizes:"32x32", rel:"icon"},
            {url: '/safari-pinned-tab.svg', type: "image/svg", sizes:"32x32", rel:"mask-icon"}
        ],
        shortcut: {url: '/favicon-16x16.png', type: "image/png"},
        apple: {url: '/apple-touch-icon.png', type: "image/x-icon"},
        other:[
            { rel: "mask-icon", url:"/mstile-70x70", type: "image/png", sizes:"70x70" },
            { rel: "mask-icon", url:"/mstile-144x144", type: "image/png", sizes:"144x144" },
            { rel: "mask-icon", url:"/mstile-150x150", type: "image/png", sizes:"150x150" },
            { rel: "mask-icon", url:"/mstile-310x150", type: "image/png", sizes:"310x150" },
            { rel: "mask-icon", url:"/mstile-310x310", type: "image/png", sizes:"310x310" },
            { rel: "android", url:"/android-chrome-192x192", type: "image/png", sizes:"192x192" },
            { rel: "android", url:"/android-chrome-512x512", type: "image/png", sizes:"512x512" },
        ]
    }

}

export default function RootLayout({ children }) {
    const jsonBusiness = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Subham Sanctuary",
        "image": "http://localhost/android-chrome-512x512.png",
        "@id": "",
        "url": "http://localhost",
        "telephone": "9051779053",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "40, Sister Nivedita Sarani, Nona Chandan Pukur,",
            "addressLocality": "Barrackpore",
            "postalCode": "700122",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.763617,
            "longitude": 88.3798829
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/subhamsarkar1999",
            "https://www.twitter.com/subhamsarkar99",
            "https://www.instagram.com/subhamsarkar99",
            "https://www.linkedin.com/in/subhamsarkar99",
            "https://www.github.com/piratecodes"
        ]
    }
    const jsonWEB = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Subham Sarkar",
        "url": "http://localhost",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "http://localhost/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    return (
        <html className={`scroll-smooth`} lang="en">
            <body className={`bg-neutral-50 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-neutral-300 ${league.className}`}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonBusiness) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonWEB) }} />
                <Provider>
                    <NextTopLoader   color="#22d3ee"   initialPosition={0.08}   crawlSpeed={200}   height={3}   crawl={true}   showSpinner={false}   easing="ease"   speed={200}   shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
                    <Navbar />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
