console.log("hello")

var mymap = L.map('mapid').setView([38.9039649
    , -77.0312475], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamF5cmVkZDExIiwiYSI6ImNqaGdsaWF3dzFpZjYzZHAzeW4wbHNmb2UifQ.COxlVvDKbzGEnSyy5Um6vg'
}).addTo(mymap);

var marker = L.marker([38.9039649, -77.0312475]).addTo(mymap);

var circle = L.circle([38.9039649, -77.0312475], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 25
}).addTo(mymap);

var polygon = L.polygon([
    [38.9039649, -77.0312475],
    [38.9039649, -77.0312475],
    [38.9039649, -77.0312475]
]).addTo(mymap);

marker.bindPopup("Elizabeth's").openPopup();
circle.bindPopup("Elizabeth's");
polygon.bindPopup("Elizabeth's");

var popup = L.popup()
    .setLatLng([38.9039649, -77.0312475])
    .setContent("1341 L St NW, Washington, DC 20005, USA")
    .openOn(mymap);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    mymap.on('click', onMapClick);

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
