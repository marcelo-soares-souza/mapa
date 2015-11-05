$(document).ready(function(){

  // baseLayers
  var osmMini = new L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, minZoom: 1, attribution: "" });
  var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'OSM', maxZoom: 18, })
  var mapbox = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'MapBox', maxZoom: 18,
      id: 'marcelosoaressouza.cigci5p513h4ftem5aeywi9ya',
      accessToken: 'pk.eyJ1IjoibWFyY2Vsb3NvYXJlc3NvdXphIiwiYSI6ImNpZ2NpNXFmMzNvaDh3Ym0zeXM3aWN3Y2EifQ.1xOQgKK1MioUioN0B4DVog' })

  // WMS Layers
  var wms_ti = L.tileLayer.wms("http://projetos.hexgis.com/geoserver/wms", {
      layers: 'HEX:terra_indigena',
      format: 'image/png',
      transparent: true,
      version: '1.3.0' });

  // Control Layers
  var baseLayers = { "OSM": osm, "MapBox": mapbox };
  var overLayers = { "TI": wms_ti };

  var map = new L.Map('map', { center: [-15.783, -47.895] , zoom: 10, layers: [ mapbox ], zoomControl: false });

  // Extensions
  L.Control.zoomHome().addTo(map);
  L.control.locate({ position: 'bottomleft' }).addTo(map);
  L.control.minimap(osmMini, { toggleDisplay:true }).addTo(map);

  L.control.search({
    url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    circleLocation: true, markerLocation: true, autoType: false, autoCollapse: true, minLength: 2, zoom: 10
  }).addTo(map);

  L.control.layers(baseLayers, overLayers).addTo(map);

});
