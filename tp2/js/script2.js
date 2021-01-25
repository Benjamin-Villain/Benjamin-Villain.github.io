var lat = 24.886;
var lon = -70.268;
var macarte = null;
function initMap() {
    macarte = L.map('map').setView([lat, lon], 5);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 1,
        maxZoom: 20,
        ext: 'png'
        }).addTo(macarte);

        const triangleCoords = [
            { lat: 29.122349, lng: -80.991361 },
            { lat: 18.216919, lng: -66.580912 },
            { lat: 32.320236, lng: -64.7740215 },
        ];
        var triangle = L.polygon(triangleCoords, {
            color: 'red'
        }).addTo(macarte);

        var circle = L.circle([crd.latitude, crd.longitude], {
            color: "red",
            radius: 50.0
        }).addTo(macarte);
        
    }
window.onload = function(){
    initMap(); 
};

navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;

        var latlngMarseille = L.latLng(43.3, 5.4);
        var latlngCurrentPosition = L.latLng(crd.latitude, crd.longitude);
        document.getElementById("distance").innerHTML = latlngMarseille.distanceTo(latlngCurrentPosition);


});