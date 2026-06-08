const CACHE = 'sankalp-v1';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll(['/SANKALP-CLASSES-SOEGAON/', '/SANKALP-CLASSES-SOEGAON/index.html'])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
