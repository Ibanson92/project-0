
value1 = 0;
console.log(value1);
value2 = 0;
console.log(value2);

$(document).ready(function() {


$('input:radio').on("click", function(){
    value1 = $("form input[name='q1']:checked").val();
    console.log(value1);
    }); //end input:radio.change function

    $('input:radio').on("click", function(){
        value1 = $("form input[name='q2']:checked").val();
        console.log(value1);
        }); //end input:radio.change function

        $('input:radio').on("click", function(){
            value1 = $("form input[name='q3']:checked").val();
            console.log(value1);
            }); //end input:radio.change function

            $('input:radio').on("click", function(){
                value1 = $("form input[name='q4']:checked").val();
                console.log(value1);
                }); //end input:radio.change function

$('#submit').on("click", function() {
    value2 = $("input:radio").val();
    console.log(value2)

}) //end submit.on click function

}); //end document.ready function

var mcd

var mymap = mcd.map('mapid').setView([38.900473, -77.029306], 13);

mcd.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{13}/{38.900473}/{y}.png?access_token={pk.eyJ1IjoieWlya2x1bSIsImEiOiJjamhnanFydGMxbHJzMzZudGlxdWhkc2ZiIn0.exn3t9JRfw--ei6w9NX8Lw}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);