if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"73546ce596e7399d5d231a4d17557e83"},{url:"/_next/static/0.0.2/_buildManifest.js",revision:"32795817b6c7d9e1081e739d82981483"},{url:"/_next/static/0.0.2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/24632825-9b0845568d88a832.js",revision:"0.0.2"},{url:"/_next/static/chunks/24632825-9b0845568d88a832.js.map",revision:"754b4cd3edda6228403121aa08b145c6"},{url:"/_next/static/chunks/38-1467ce88814f5f90.js",revision:"0.0.2"},{url:"/_next/static/chunks/38-1467ce88814f5f90.js.map",revision:"dec25ad6fd1cf843164afe80a92fa67c"},{url:"/_next/static/chunks/496-a00642af2d03c690.js",revision:"0.0.2"},{url:"/_next/static/chunks/496-a00642af2d03c690.js.map",revision:"88602ba8476d86b69e9c63e42579f0a9"},{url:"/_next/static/chunks/542-2f98aeee84f83c79.js",revision:"0.0.2"},{url:"/_next/static/chunks/542-2f98aeee84f83c79.js.map",revision:"07787933ac65843b3871de5021dea7ec"},{url:"/_next/static/chunks/606-0538fc856dc3e7d2.js",revision:"0.0.2"},{url:"/_next/static/chunks/606-0538fc856dc3e7d2.js.map",revision:"6dd23bd60da7cc444096059698902bd7"},{url:"/_next/static/chunks/7c806026-1fc6b34a90ce5215.js",revision:"0.0.2"},{url:"/_next/static/chunks/7c806026-1fc6b34a90ce5215.js.map",revision:"65240b4599700635d3279a080f1f7836"},{url:"/_next/static/chunks/896-b3e2edf473056aca.js",revision:"0.0.2"},{url:"/_next/static/chunks/896-b3e2edf473056aca.js.map",revision:"0a58e177027ab114588238143efae2e7"},{url:"/_next/static/chunks/961-539598164f73a0e5.js",revision:"0.0.2"},{url:"/_next/static/chunks/961-539598164f73a0e5.js.map",revision:"b48ac57e9093f6bee99a954c51b2abf5"},{url:"/_next/static/chunks/app/layout-80127392555e82c2.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/layout-80127392555e82c2.js.map",revision:"dcff157bff56cde0e92df5e1d089f9a4"},{url:"/_next/static/chunks/app/loading-cebb02b1a612dabe.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/loading-cebb02b1a612dabe.js.map",revision:"a373dcb52ed10d66fab9e6a67d902192"},{url:"/_next/static/chunks/app/not-found-749463241b566c8a.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/not-found-749463241b566c8a.js.map",revision:"e8921752ca6fe38ac27a38450df810de"},{url:"/_next/static/chunks/app/page-f5e8428379dad65f.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/page-f5e8428379dad65f.js.map",revision:"9a06ba6816daf4f0eefac862faf64705"},{url:"/_next/static/chunks/app/privacy-policy/layout-ab88480b362c388f.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/privacy-policy/page-44e5b4f7b6903c26.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/privacy-policy/page-44e5b4f7b6903c26.js.map",revision:"dd57bcd52e06a994b4e2c188977c7592"},{url:"/_next/static/chunks/app/terms-and-condition/layout-130e3b3c907748fa.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/terms-and-condition/page-ae59c3b70efb2a4c.js",revision:"0.0.2"},{url:"/_next/static/chunks/app/terms-and-condition/page-ae59c3b70efb2a4c.js.map",revision:"98c52e91e48f409c6661e0bba4f6f7ec"},{url:"/_next/static/chunks/bce60fc1-403c4a8d88fc7b87.js",revision:"0.0.2"},{url:"/_next/static/chunks/bce60fc1-403c4a8d88fc7b87.js.map",revision:"803600ec30d273a7cb0a7e03c6b05c5b"},{url:"/_next/static/chunks/cc3e0619-4b130c5ef81c8f5c.js",revision:"0.0.2"},{url:"/_next/static/chunks/cc3e0619-4b130c5ef81c8f5c.js.map",revision:"cb1de0c2ff7be806ac3dccafaf5bcf08"},{url:"/_next/static/chunks/framework-50529927c4ed889a.js",revision:"0.0.2"},{url:"/_next/static/chunks/framework-50529927c4ed889a.js.map",revision:"d106f296e7b156f35fe58aa9ed632405"},{url:"/_next/static/chunks/main-app-635e1f04687e0674.js",revision:"0.0.2"},{url:"/_next/static/chunks/main-app-635e1f04687e0674.js.map",revision:"f4bc87ec03b54546b83d24e1496d3fa1"},{url:"/_next/static/chunks/main-d44bef43832b5085.js",revision:"0.0.2"},{url:"/_next/static/chunks/main-d44bef43832b5085.js.map",revision:"980a98222bac0b5ce16de9283d91505e"},{url:"/_next/static/chunks/pages/_app-2e2ecacc2f25c340.js",revision:"0.0.2"},{url:"/_next/static/chunks/pages/_app-2e2ecacc2f25c340.js.map",revision:"baac7cf4ae9a2824826456c2bc470552"},{url:"/_next/static/chunks/pages/_error-86a1ea62365162b3.js",revision:"0.0.2"},{url:"/_next/static/chunks/pages/_error-86a1ea62365162b3.js.map",revision:"9a18f80098334109f9bb1a36240d8ff2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1e6d2bcfc99d41b6.js",revision:"0.0.2"},{url:"/_next/static/chunks/webpack-1e6d2bcfc99d41b6.js.map",revision:"ce49702857175b6768aed4f407006c54"},{url:"/_next/static/css/04ada05e4bcb6327.css",revision:"04ada05e4bcb6327"},{url:"/_next/static/css/04ada05e4bcb6327.css.map",revision:"db3a91f8f4c1b599f287b8ede2e72e88"},{url:"/_next/static/css/2bd102c3629b3cd0.css",revision:"2bd102c3629b3cd0"},{url:"/_next/static/css/2bd102c3629b3cd0.css.map",revision:"b90e12943f6625723e57d8973765a726"},{url:"/_next/static/media/0ec7565d032fce1b-s.p.woff2",revision:"efa99848a7fcfec95fc3e663d8b47b7f"},{url:"/_next/static/media/bg1.f274655e.png",revision:"9da398f0fe3e4e3e62f1ec0b6e6e5dfe"},{url:"/_next/static/media/bg2.b1a3b52e.png",revision:"fb46e7da91209d59793de6cb2c1cdc9f"},{url:"/_next/static/media/cta2-img.37555f73.png",revision:"919b736dcf9da327e50b531fb9bc0395"},{url:"/_next/static/media/ea9f895dbeaa89e2-s.woff2",revision:"f0ac4a1e1fd960f71c604309cf01e8f0"},{url:"/_next/static/media/fdc4a6e64279ae84-s.woff2",revision:"b7d06fb65f3396afb3e19c1ca01b4556"},{url:"/_next/static/media/logo.485b778f.svg",revision:"4e26451d82b5d790e6a21f3d39bcb3fc"},{url:"/_next/static/media/main-feature.ecd2b386.png",revision:"7112fe73707142fafa9b65dfc94be8c9"},{url:"/_next/static/media/me.11bb706a.jpg",revision:"6d79faa28c3c720a2f727ab34b40ce8b"},{url:"/android-chrome-192x192.png",revision:"6f013bb7ed45d1e903d7c04a492efada"},{url:"/android-chrome-512x512.png",revision:"40fa19acbcde220dc539ff8f164440ff"},{url:"/apple-touch-icon.png",revision:"97850c356ee2dbb81f144ea5bea9ffb1"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"e3ba4961ad5588486e373c064a0d9620"},{url:"/favicon-32x32.png",revision:"0cdccf80132b1f17a3170fb96fa8db14"},{url:"/favicon.ico",revision:"563615c83eecda0f68c5859dfc2c7e4a"},{url:"/manifest.webmanifest",revision:"c37ed9f0a4217b2993688467bd1651f7"},{url:"/mstile-144x144.png",revision:"db90dbcbcdc60934f88c08a01c4de9f4"},{url:"/mstile-150x150.png",revision:"64ee2823a4a02a22770dcc98068441c6"},{url:"/mstile-310x150.png",revision:"a88a809c7435fd9de764b8e41225b8f3"},{url:"/mstile-310x310.png",revision:"3cfa10b29f9d4c12b571f2c0b34a006d"},{url:"/mstile-70x70.png",revision:"132f8da252c60568e5b27c780ad98242"},{url:"/robots.txt",revision:"1c3a478b49e6c72127ee0f878166b7fb"},{url:"/safari-pinned-tab.svg",revision:"24bbd567bf6f93b7f51dd6e53b77bfe3"},{url:"/sitemap-0.xml",revision:"e724d8d1146772743c101fcec934d60f"},{url:"/sitemap.xml",revision:"b4dfd91d87707161a958c48a221c7591"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map