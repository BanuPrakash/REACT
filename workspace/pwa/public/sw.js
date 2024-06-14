
self.addEventListener("install" , event => {
    event.waitUtil(
        caches.open("users-v1").then( cache => {
            cache.addAll(["/", "/static/js/bundle.js", "manifest.json"]);
        })
    )
});

self.addEventListener("fetch", event => {
    // event.responseWith(
    //     caches.match(event.request).then(response => {
    //         return response || fetch(event.request);
    //     })
    // )
    const URL = new URL(event.request.url);
    event.respondWith(networkfirst(event.request));
});

async function networkfirst(request) {
    try {
        const networkres = await fetch(request);
        if(networkres.ok) {
            const cache = await caches.open("users-v1");
            cache.put(request, networkres.clone());
        }
        return networkres;
    } catch(error) {
        const cachedRes = await caches.match(request);
        return cachedRes || Response.error();
    }
}