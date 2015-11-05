var hostURL = 'http://projetos.hexgis.com';

var layerStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

var ti = new L.geoJson(null,
                       { style: layerStyle,
                         onEachFeature:
                           function(feature, layer) {
                                 popupOptions = { maxWidth: 200 };
                                 layer.bindPopup(feature.properties.terrai_nom ,popupOptions);
                           }
                       });

function wfsCallbacks(data)
{
  ti.addData(data);
};

$.ajax({
  url: hostURL + "/geoserver/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=HEX:terra_indigena&outputFormat=text/javascript&format_options=callback:wfsCallbacks",
  dataType: 'JSONP',
  success: wfsCallbacks
});
