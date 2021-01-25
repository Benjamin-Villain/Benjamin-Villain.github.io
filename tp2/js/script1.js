// NICE
var lat = 43.700000;
var lon = 7.250000;

function initMap() {
    var carte = L.map('map').setView([lat, lon], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
        }).addTo(carte);
        var pos = L.marker([lat, lon]).addTo(carte).bindPopup('Nice').openPopup();
    }


window.onload = function(){
    initMap(); 
};

navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;
        document.getElementById("long").innerHTML = crd.longitude;
        document.getElementById("lat").innerHTML = crd.latitude;
});