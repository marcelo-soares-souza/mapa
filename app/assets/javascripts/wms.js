// WMS Layers

var wms_ti = L.tileLayer.wms("http://projetos.hexgis.com/geoserver/wms", {
      layers: 'HEX:terra_indigena',
      format: 'image/png',
      transparent: true,
      version: '1.3.0' });
