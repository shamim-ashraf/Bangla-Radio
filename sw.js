var CACHE = "bangla-radio-v1";
var URLS = ["./", "./index.html", "./script.js"];

self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(URLS); }));
    self.skipWaiting();
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch", function (e) {
    if (e.request.url.includes("stream") || e.request.url.includes("radio") || e.request.url.includes("listen") || e.request.url.includes("icecast")) return;
    e.respondWith(
        caches.match(e.request).then(function (r) { return r || fetch(e.request); })
    );
});
