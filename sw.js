const CACHE='gabsi-bridge-v2';
const ASSETS=['./','./index.html','./score-sheet.html','./kocokan-kartu.html','./manifest.json','./assets/favicon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/ketua-gabsi.jpg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request))));
