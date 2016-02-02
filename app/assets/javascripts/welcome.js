$(document).ready(function(){
  var map = new L.Map('map', { center: [-15.783, -47.895] , zoom: 10, layers: [ mapbox ], zoomControl: false });

  // Control Layers
  var baseLayers = { "OSM": osm, "MapBox": mapbox };
  var overLayers = { "TI": wms_ti, "TI WFS": ti, "Fortaleza": wms_fortaleza, "Homicidio" : wms_homicidio };

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
