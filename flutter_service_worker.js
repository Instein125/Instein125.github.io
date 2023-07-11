'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "09626411edd348e801547d2c45b9f58d",
"assets/AssetManifest.smcbin": "71cb926e22186f90f6c2011fe476312c",
"assets/assets/fonts/PlayfairDisplay-Black.ttf": "620b24746be718559d5b61c99a11111c",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "f9929052b526bf606d3128c4c3ad8b44",
"assets/assets/fonts/PlayfairDisplay-Medium.ttf": "39a3659a5e980111ddf8858e2ae8af89",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/assets/fonts/PlayfairDisplay-SemiBold.ttf": "a56474741daed0dd40b7b580627f2f98",
"assets/assets/fonts/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/images/2.0x/myLogo.png": "1a4bdf6537fe4510ec923ce3b9028ee4",
"assets/assets/images/accessControl%2520homapage.png": "15a8f1eff2a683ab70cd2f59a6c99944",
"assets/assets/images/accidentAlert.png": "b0d7d1c45613b707e8317f381ca5d666",
"assets/assets/images/background.jpg": "c49b0650150c74bef4ec23f63e1bb276",
"assets/assets/images/dashboard.png": "1d4216924a81b4a63ede595ba5dac918",
"assets/assets/images/drawer.png": "0bdbc1147f5999820592aeed4c86ef44",
"assets/assets/images/email.png": "49b9a54d1a66305ee959325dc2ebc7c6",
"assets/assets/images/formFillup.png": "1f8bc136c0f966929ba4c24e8a1fe4ce",
"assets/assets/images/goonline%2520page.png": "df4647bff8fcb03e38ba88163ca5ae01",
"assets/assets/images/icons8-github-500%2520(1).png": "f71afc2ac35c753ae59afd96ca3e957a",
"assets/assets/images/icons8-instagram-500%2520(1).png": "373f41494138ecb432e9e73732ac2c2b",
"assets/assets/images/icons8-linkedin-500%2520(1).png": "08ca3cc015a9a05e8680da4b4d586b33",
"assets/assets/images/icons8-phone-500.png": "de79ec4b97d045ee757461694f41f629",
"assets/assets/images/myLogo.png": "1a4bdf6537fe4510ec923ce3b9028ee4",
"assets/assets/images/nearby%2520Driver.png": "00e5d5610c979bb0b1903aaff1fe0057",
"assets/assets/images/notificationPage.png": "41aa272af3dadc31dc1395061517475b",
"assets/assets/images/pickup%2520location.png": "6bd226ed27be950470ba101b5f257755",
"assets/assets/images/Profile.png": "242458c3f76028665dee14171515053a",
"assets/assets/images/sajilo_ambulance1%2520.png": "dc73e8361da83649b6c2ed7f57c92252",
"assets/assets/images/sammansvgAsset%25204.svg": "68d89ab45b347c8603117f552a2a8647",
"assets/assets/images/skycast.png": "108db972d2a4e16dbbba11a7c1f4e51d",
"assets/assets/images/skycastHomepage.png": "e83401b30cb68fbe88cf77c81ef2127e",
"assets/assets/images/userLogin.png": "08b99326271b109a3a5e3c1b8af7f3ef",
"assets/FontManifest.json": "18b5225abab13f2fc1abc4342353a797",
"assets/fonts/MaterialIcons-Regular.otf": "77b44589837187b6a67f33a4d0018c1e",
"assets/NOTICES": "f0a23ed14d676d45dd591cda3fc09b9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef09e4136bfa04591aef7c9361f9238c",
"/": "ef09e4136bfa04591aef7c9361f9238c",
"main.dart.js": "4bf610165f29a3e6fe2cda423377eb40",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
