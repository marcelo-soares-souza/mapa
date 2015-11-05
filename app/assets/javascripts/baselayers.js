// baseLayers

var osmMini = new L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, minZoom: 1, attribution: "" });

var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'OSM', maxZoom: 18, })

var mapbox = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'MapBox', maxZoom: 18,
      id: 'marcelosoaressouza.cigci5p513h4ftem5aeywi9ya',
      accessToken: 'pk.eyJ1IjoibWFyY2Vsb3NvYXJlc3NvdXphIiwiYSI6ImNpZ2NpNXFmMzNvaDh3Ym0zeXM3aWN3Y2EifQ.1xOQgKK1MioUioN0B4DVog' })
