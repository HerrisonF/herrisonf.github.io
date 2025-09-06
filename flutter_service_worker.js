'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f0f8829e4b8170158fd10d31be1145ce",
"version.json": "0efe319f73d7507267d1dd673ed70326",
"favicon.ico": "39a2ef5dafa9eb2c19d66fd8718f6792",
"index.html": "7b9d051f00d6e4f2df03ba31aa88914c",
"/": "7b9d051f00d6e4f2df03ba31aa88914c",
"main.dart.js": "c28dc9e9035371536b198d13d5f20db0",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "a07a9c31d839857207779e95cca94ce5",
"icons/Icon-maskable-192.png": "a07a9c31d839857207779e95cca94ce5",
"icons/Icon-maskable-512.png": "28f5e12cc7d33f3dadeac17c497fa6a9",
"icons/Icon-512.png": "28f5e12cc7d33f3dadeac17c497fa6a9",
"manifest.json": "4827b9fba50861db810e934a143db582",
"assets/AssetManifest.json": "d56644586d1226b1bc6143b0a2626d75",
"assets/NOTICES": "1ac61bb2039ed025a6523cee8823e183",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/AssetManifest.bin.json": "cec42e4c90fb78b99539429e60c8d328",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "440da663f17184f21f007a3a2bf60f69",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7810d462b10616843acf87f7629c3f31",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/projetos/fonteReiki/fonte_reiki_3.png": "9819b9e31de8de810a2aff6cfaf41b47",
"assets/assets/images/projetos/fonteReiki/fonte_reiki_2.png": "4eb39a8560bd29fe07fb31a58bdcb157",
"assets/assets/images/projetos/fonteReiki/fonte_reiki_1.png": "00bbd68f719fbcf664c6676ce48a8189",
"assets/assets/images/projetos/fonteReiki/fonte_reiki_4.png": "12816036436a16eb48435e270dff0d33",
"assets/assets/images/projetos/leagueOfLegends/lol_1.png": "ab8fa9b4418abd21ef945484119f1b4c",
"assets/assets/images/projetos/leagueOfLegends/lol_2.png": "fd4308dbbde2804be9cffa9c7cd7e4c8",
"assets/assets/images/projetos/leagueOfLegends/lol_3.png": "df69506cb6774dec592d73c8f7198a4b",
"assets/assets/images/projetos/leagueOfLegends/lol_6.png": "c88c53c3eaf4c0a4739dee236e380337",
"assets/assets/images/projetos/leagueOfLegends/lol_4.png": "e69a73d2ea149c264800b6889c3ca74b",
"assets/assets/images/projetos/leagueOfLegends/lol_5.png": "5b5227b0d9129536900b48051578e080",
"assets/assets/images/projetos/mambo/mambo_1.png": "80a5db463d39b6381fb0213177f65b60",
"assets/assets/images/projetos/mambo/mambo_2.jpeg": "d30e54dada63b133bcb1eac7e1215520",
"assets/assets/images/projetos/mobileBus/mobileBus_8.png": "385ff6dfa5f5dde08a1355d505a44b29",
"assets/assets/images/projetos/mobileBus/mobileBus_1.png": "27ec57c7bed46f30ccd8fa535f376c19",
"assets/assets/images/projetos/mobileBus/mobileBus_3.png": "c99f4a626974f7c09eba2f415688c8c3",
"assets/assets/images/projetos/mobileBus/mobileBus_2.png": "87baf40d9dbe2a675c58958cf6841c2c",
"assets/assets/images/projetos/mobileBus/mobileBus_6.png": "7f128654615e1e0e41356bbba2a7a7b1",
"assets/assets/images/projetos/mobileBus/mobileBus_7.png": "8bc0a12eb22cbb21219ded0ede024a23",
"assets/assets/images/projetos/mobileBus/mobileBus_5.png": "b267a20438df56416150ae66fc04a47a",
"assets/assets/images/projetos/mobileBus/mobileBus_4.png": "6631ce67c180df45747248642929a485",
"assets/assets/images/projetos/cip/cip_2.png": "acf9352aca9635530bd80908ce4a4fcf",
"assets/assets/images/projetos/cip/cip_1.png": "cd16c18dc68ced1829de238c711a09b9",
"assets/assets/images/projetos/tcc/pergunta-tcc.png": "241a98c2a1a72a9e879b14b14f9b7081",
"assets/assets/images/projetos/tcc/inicio-tcc.png": "76418d6f1717b8c2e0566e8cff54aa1d",
"assets/assets/images/projetos/tcc/password-tcc.png": "377e41a1420cfec431d9abb880bbd7ca",
"assets/assets/images/projetos/tcc/listagem-tcc.png": "cbee31877429c64e0c3e42dbbe87c098",
"assets/assets/images/projetos/quebus/quebus_2.png": "84663dac9934354129d4843405c14e0e",
"assets/assets/images/projetos/quebus/quebus_1.png": "fd15c8ce7f4ccafaeebcbced39e71731",
"assets/assets/images/projetos/meu-tecnico/meu_tecnico.png": "eed0e3977552311877b0532f44915bd3",
"assets/assets/images/projetos/claro-lgpd/claro_1.png": "66ce696d1045433c823191f2be54d6a4",
"assets/assets/images/projetos/claro-lgpd/claro_2.png": "95ff66279ba6e179bcffec6cf40437d8",
"assets/assets/images/projetos/proje-oi/oi_2.png": "570ccc5f130b4544c4966eadf0e90080",
"assets/assets/images/projetos/proje-oi/oi_1.png": "c67f7ab9bce3e62a309268b6dc7446eb",
"assets/assets/images/foto.png": "68fbe224eaa3a1a9ba42df1b50b7a095",
"assets/assets/logo/logo.png": "63fdcb3d6262690ffbec2841263ebfa3",
"assets/assets/data/carrer_timeline.json": "c9b9406a2df95705a2c7f4a8069af7db",
"assets/assets/data/portfolio_full.json": "f8f56c32b0fa734d84fd62a8c4771db5",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
