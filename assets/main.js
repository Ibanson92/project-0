
value1 = 0;
console.log(value1);
value2 = 0;
console.log(value2);
value3 = 0;
console.log(value3);
value4 = 0;
console.log(value4);
valueTotal = 0;
console.log(valueTotal);
valuex = 0;
console.log(valuex);

$(document).ready(function() {


$('input:radio').on("click", function(){
    
    value1 = $("form input[class='other']:checked").val();
    valuex = $("form input[id='random']:checked").val() + (Math.floor(Math.random() * (4-1)+1));
    console.log("value1=" + value1);
    console.log("valuex=" + valuex);
    }); //end input:radio.change function

    $('input:radio').on("click", function(){
        value2 = $("form input[name='q2']:checked").val();
        console.log("value2=" + value2);
        }); //end input:radio.change function

        $('input:radio').on("click", function(){
            value3 = $("form input[name='q3']:checked").val();
            console.log("value3=" + value3);
            }); //end input:radio.change function

            $('input:radio').on("click", function(){
                value4 = $("form input[name='q4']:checked").val();
                console.log("value4=" + value4);
                }); //end input:radio.change function

$('#submit').on("click", function() {
    valueTotal = value1 + value2 + value3 + value4;
    valueTotalx = valuex + value2 + value3 + value4;
    console.log(valueTotal);

    if (valueTotal == 1111 || valueTotalx == 1111) {
        location.href = "pasta1.html";
    };
    if (valueTotal == 1121 || valueTotalx == 1121) {
        location.href = "sea1.html";
    };
    if (valueTotal == 1131 || valueTotalx == 1131) {
        location.href = "meat1.html";
    }; 
    if (valueTotal == 1141 || valueTotalx == 1141) {
        location.href = "vegan1.html";
    };
    if (valueTotal == 2111 || valueTotalx == 2111) {
        location.href = "pasta2.html";
    }; 
    if (valueTotal == 2121 || valueTotalx == 2121) {
        location.href = "sea2.html";
    };
    if (valueTotal == 2131 || valueTotalx == 2131) {
        location.href = "meat2.html";
    };
    if (valueTotal == 2141 || valueTotalx == 2141) {
        location.href = "vegan2.html";
    };
    if (valueTotal == 3111 || valueTotalx == 3111) {
        location.href = "pasta3.html";
    };
    if (valueTotal == 3121 || valueTotalx == 3121) {
        location.href = "sea3.html";
    };
    if (valueTotal == 3131 || valueTotalx == 3131) {
        location.href = "meat3.html";
    };
    if (valueTotal == 3141 || valueTotalx == 3141) {
        location.href = "vegan3.html";
    };
    if (valueTotal == 1112 || valueTotalx == 1112 || valueTotal == 2112 || valueTotalx == 2112 || valueTotal == 3112 || valueTotalx == 3112 || valueTotal == 1122 || valueTotalx == 1122 || valueTotal == 1132 || valueTotalx == 1132 || valueTotal == 1142 || valueTotalx == 1142 || valueTotal == 2112 || valueTotalx == 2112 || valueTotal == 2122 || valueTotalx == 2122 || valueTotal == 2132 || valueTotalx == 2132 || valueTotal == 2142 || valueTotalx == 2142 || valueTotal == 3112 || valueTotalx == 3112 || valueTotal == 3122 || valueTotalx == 3122 || valueTotal == 3132 || valueTotalx == 3132 || valueTotal == 3142 || valueTotalx == 3142) {
        location.href = "party.html";
    };

}) //end submit.on click function

}); //end document.ready function

// var mcd

// var mymap = mcd.map('mapid').setView([38.900473, -77.029306], 13);

// mcd.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{13}/{38.900473}/{y}.png?access_token={pk.eyJ1IjoieWlya2x1bSIsImEiOiJjamhnanFydGMxbHJzMzZudGlxdWhkc2ZiIn0.exn3t9JRfw--ei6w9NX8Lw}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);