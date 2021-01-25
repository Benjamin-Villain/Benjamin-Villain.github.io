var lat = 43.7;
var lon = 7.25;
var macarte = null;
function initMap() {
    macarte = L.map('carte').setView([lat, lon], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);
    }

window.onload = function(){
    initMap(); 
};

navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;
        document.getElementById("lat").innerHTML = crd.latitude;
        document.getElementById("long").innerHTML = crd.longitude;
});