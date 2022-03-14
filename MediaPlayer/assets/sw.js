//Este archivo ebe estar en la parte desde donde se ejecuta el proyecto.
const VERSION = "v1";

//Se cargan los archivos dentro del caché cuando se abre por primera vez
self.addEventListener('install', event =>{
  event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
  const request = event.request;
  //Asegurar que se hace una petición GET
  if(request.method !== "GET"){
    return;
  }

  //Buscar en el caché si esta petición está disponible.
  event.respondWith(cachedResponse(request));

  //Actualizar caché. Si el user tiene conexión igual se va a buscar primero en el caché y va a retornar lo que haya ahí. Debemos verificar si hay cambios en los archivos y actualizar el caché para el que user siempre tenga la última versión de la app.
  event.waitUntil(updateCache(request));
});

async function precache(){
  const cache = await caches.open(VERSION);
  cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request){
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);   //Si no hay nada en el caché, se hace la petición online.
}

async function updateCache(request){
  const cache = await caches.open(VERSION);
  const response = await fetch(request);

  return cache.put(request, response);
}