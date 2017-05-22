$(document).ready(function(){

  initMap();

});

function initMap() {
  var uluru = {lat: 19.518668, lng: -99.23249599999997};
  var c = {lat: 19.518884463514354, lng: -99.2400561645627};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: c,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    disableDoubleClickZoom: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
