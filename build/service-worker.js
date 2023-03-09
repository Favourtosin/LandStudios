"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","71dc0d28edf91aa41f2177a663e2cdf5"],["/static/css/main.0dd2c586.css","318020f2897a42316d9896e06e22f3dc"],["/static/js/main.c0fdf7a1.js","c37c4966632adc9e4e4648596b14d7a5"],["/static/media/icon-facebook.6bb27b42.svg","6bb27b42035b99b5afcad2502f555385"],["/static/media/icon-hamburger.aaa97e52.svg","aaa97e522585c5075951af8205ea91e9"],["/static/media/icon-instagram.f2cc3ebf.svg","f2cc3ebf3ae266c22f42791cb58eb0d7"],["/static/media/icon-pinterest.a113ee92.svg","a113ee92911a283a3282049e12f625c3"],["/static/media/icon-twitter.eaea353f.svg","eaea353fea0324812310de364e43133d"],["/static/media/image-deep-earth.6775b4d4.jpg","6775b4d43b038d894cbd4797db0e2675"],["/static/media/image-deep-earth.f2f8d9cd.jpg","f2f8d9cd8551b543fe982b391d04ce69"],["/static/media/image-fisheye.0d0dd1dc.jpg","0d0dd1dc7703a78e298e7fb01ae9ec05"],["/static/media/image-fisheye.424dcc3c.jpg","424dcc3cba5db9b4749004ce8d58fdbd"],["/static/media/image-from-above.41622769.jpg","416227692ab374b38162ac5e863a55be"],["/static/media/image-from-above.fa84bcdf.jpg","fa84bcdf6d24289c9ad27c77a37d1c9f"],["/static/media/image-grid.7f6c56ef.jpg","7f6c56ef3249af6441ed2d32eb245f59"],["/static/media/image-grid.c35701a4.jpg","c35701a414eee790760ba88dc05a4c4c"],["/static/media/image-hero.1ccce44d.jpg","1ccce44daf413b6c9c89afd88d68cc91"],["/static/media/image-interactive.1fe1e201.jpg","1fe1e2016054a23737583e8a65a52cae"],["/static/media/image-interactive.a3187b1e.jpg","a3187b1ed455f94e4922f76b1375f408"],["/static/media/image-night-arcade.c48a5bde.jpg","c48a5bded8d255085ef14880b43381ea"],["/static/media/image-night-arcade.da1e2407.jpg","da1e24072d6d5af41ce3b918497893d4"],["/static/media/image-soccer-team.0f74e30d.jpg","0f74e30d0703966e39dd0e70b40ad47e"],["/static/media/image-soccer-team.d8c478dc.jpg","d8c478dca6a5d4b917fb53ed8b70f353"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});