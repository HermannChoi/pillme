if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6b88ed12e839dd9bdddd7bd69e6b5428"},{url:"/_next/static/6lX0K6BYZyF3_1glZ3WgW/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/6lX0K6BYZyF3_1glZ3WgW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-2338270fc085832d.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/525-6dc6d4f97db81b23.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/648-31b7bc31a0062e40.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/77-ee0a3a3d81b351cc.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/app/_not-found/page-04bdbb1789035d4e.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/app/layout-99c7ea75b74e7426.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/app/page-e914d16f431792fd.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/app/pages/setting/page-30656fc454946e02.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/fd9d1056-db0f11cca338779f.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/main-47aad47fc408742f.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/main-app-0ac320bdbf25ded3.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-44a925130693c79a.js",revision:"6lX0K6BYZyF3_1glZ3WgW"},{url:"/_next/static/css/6dec8beb6da5dadb.css",revision:"6dec8beb6da5dadb"},{url:"/_next/static/media/c1d8505ba1de2104-s.p.ttf",revision:"cf213749928c0dd97365490c1c25e3ee"},{url:"/_next/static/media/home.0f8341d4.svg",revision:"23c11d6934fe556a7afd16a494e1b610"},{url:"/_next/static/media/pill.768981c8.svg",revision:"2f4612e99cf3e0625972644ab38d27eb"},{url:"/_next/static/media/setting.f15d00ae.svg",revision:"7e851f8458b69f69d4fe996f8cc53337"},{url:"/manifest.json",revision:"7a3581f641abc39a23633f342b6aae3a"},{url:"/png/192icon.png",revision:"fbc87cc7f035ef327aa1ca41c718ea4e"},{url:"/png/512icon.png",revision:"98c7bcf823f49219a9a8ea132fb1b6c9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
