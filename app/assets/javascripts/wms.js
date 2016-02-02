// WMS Layers
var url = "http://projetos.hexgis.com/geoserver/wms";

// var wms_ti = L.tileLayer.wms("http://projetos.hexgis.com/geoserver/wms", {
//      layers: 'HEX:terra_indigena',
//      format: 'image/png',
//      transparent: true,
//      version: '1.3.0' });

var wms_ti = L.tileLayer.betterWms(url, {
      layers: 'HEX:terra_indigena',
        transparent: true,
        format: 'image/png',
        propertyName: 'terrai_nom'
      });

var wms_fortaleza = L.tileLayer.betterWms(url, {
      layers: 'HEX:shape_fortaleza',
        transparent: true,
        format: 'image/png',
        propertyName: 'shape_id'
      });

var wms_homicidio = L.tileLayer.betterWms(url, {
      layers: 'HEX:homicidio_ceara',
        transparent: true,
        format: 'image/png',
        propertyName: 'idd'
      });
