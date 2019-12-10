import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import KML from 'ol/format/KML';
import { Heatmap as HeatmapLayer, Tile as TileLayer } from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import Chart from 'chart.js';

var vector = new HeatmapLayer({
  source: new VectorSource({
    url: 'data/kml/data.kml',
    format: new KML({
      extractStyles: false
    })
  }),
  blur: parseInt(40, 10),
  radius: parseInt(15, 10),
  weight: function (feature) {
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


var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'white';
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  responsive: true,
  scaleFontColor: 'white',

  // The data for our dataset
  data: {

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      fill: true,
      label: 'remittance',
      pointBorderColor: "white",
      borderColor: 'rgb(255, 255, 255)',
      data: [50, 40, 13, 7, 9, 29, 31, 28, 33, 35, 40, 70],
      pointBackgroundColor: 'white',


    }]
  },
  options: {
    elements: {
      line: {
        tension: 0
      }
    },
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  }
});

var ctx1 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx1, {
  // The type of chart we want to create
  type: 'bar',
  responsive: true,
  scaleFontColor: 'white',

  // The data for our dataset
  data: {
    labels: ['Company X', 'Company Y', 'Company A', 'Company C', 'Company D', 'Company W'],
    datasets: [{
      fill: true,
      backgroundColor: 'white',
      label: 'investment',
      pointBorderColor: "white",
      borderColor: 'rgb(255, 255, 255)',
      data: [50, 40, 39, 38, 37, 35],
      pointBackgroundColor: 'white',


    }]
  },
  options: {

  }
});

var ctx2 = document.getElementById('myChart3').getContext('2d');
var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};

var backgrounds = [];
var labels = [];
var values = [];
for (var i = 0; i < 12; i++) {
  labels.push("Data " + i);
  values.push(Math.floor(Math.random() * 100));
  backgrounds.push(dynamicColors());
}
var chart3 = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'doughnut',
  responsive: true,
  scaleFontColor: 'white',
  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      fill: true,
      backgroundColor: backgrounds,
      label: labels,
      borderColor: 'white',
      data: values,

    }]
  },
  options: {
    elements: {
      line: {
        tension: 0
      }
    },

  }
});