import config from '../config/config.js'

let map;
let latitude = config.DEFAULT_LATITUDE
let longitude = config.DEFAULT_LONGITUDE
let mapId = config.MAP_ID

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + config.API_KEY + '&callback=initMap';
script.async = true;

window.initMap = function() {
    map = new google.maps.Map(document.querySelector("#map"), {
        center:{ lat: parseFloat(latitude), lng: parseFloat(longitude)},
        zoom: 8,
        mapId: mapId
      });
};

document.head.appendChild(script);
      