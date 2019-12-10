import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import KML from 'ol/format/KML';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';

var vector = new HeatmapLayer({
  source: new VectorSource({
    url: 'data/kml/data.kml',
    format: new KML({
      extractStyles: false
    })
  }),
  blur: parseInt(40, 10),
  radius: parseInt(15, 10),
  weight: function(feature) {
    var name = feature.get('name');
    var magnitude = parseFloat(name.substr(2));
    return magnitude - 5;
  }
});

var raster = new TileLayer({
  source: new Stamen({
    layer: 'toner'
  })
});

new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [13475881.975750, 1631471.931719],
    maxZoom: 10,
    minZoom: 5,
    zoom: 6
  })
});

map.on('moveend', function(e) {
  console.log("hello")
});