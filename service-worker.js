Warning: truncated output (original token count: 263)
Total output lines: 27

const CACHE_NAME = 'review-stock-v8';
const APP_FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];

self.addEventList…163 tokens truncated…const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
