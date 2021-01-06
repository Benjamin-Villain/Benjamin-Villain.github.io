
var geo_options = {
    enableHighAccuracy: true,
    maximumAge        : 0,
    timeout           : 10000
  };

function testGeoLocation() {
    if (navigator.geolocation) {
        /* la géolocalisation est disponible */
        console.log("la géolocalisation est disponible")
      } else {
        alert("la géolocalisation est indisponible")
      }
}

navigator.geolocation.getCurrentPosition(function(pos) {
    let crd = pos.coords;
    document.getElementById("long").innerHTML = crd.longitude;
    document.getElementById("lat").innerHTML = crd.latitude;
    document.getElementById("prec").innerHTML = crd.accuracy;
    document.getElementById("vit").innerHTML = crd.speed;
    document.getElementById("ts").innerHTML = pos.timestamp;
});
navigator.geolocation.watchPosition(function(pos) {
    let crd = pos.coords;
    document.getElementById("long").innerHTML = crd.longitude;
    document.getElementById("lat").innerHTML = crd.latitude;
    document.getElementById("prec").innerHTML = crd.accuracy;
    document.getElementById("vit").innerHTML = crd.speed;
    document.getElementById("ts").innerHTML = pos.timestamp
});
