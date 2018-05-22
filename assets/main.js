
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
        location.href = "restaurants/cheapitalian.html";
    };
    if (valueTotal == 1121 || valueTotalx == 1121) {
        location.href = "restaurants/cheapseafood.html";
    };
    if (valueTotal == 1131 || valueTotalx == 1131) {
        location.href = "restaurants/cheapmeat.html";
    }; 
    if (valueTotal == 1141 || valueTotalx == 1141) {
        location.href = "restaurants/cheapvegan.html";
    };
    if (valueTotal == 2111 || valueTotalx == 2111) {
        location.href = "restaurants/lowpriceitalian.html";
    }; 
    if (valueTotal == 2121 || valueTotalx == 2121) {
        location.href = "restaurants/lowpricesea.html";
    };
    if (valueTotal == 2131 || valueTotalx == 2131) {
        location.href = "restaurants/lowpricemeat.html";
    };
    if (valueTotal == 2141 || valueTotalx == 2141) {
        location.href = "restaurants/lowpricevegan.html";
    };
    if (valueTotal == 3111 || valueTotalx == 3111) {
        location.href = "restaurants/highpriceitalian.html";
    };
    if (valueTotal == 3121 || valueTotalx == 3121) {
        location.href = "restaurants/highpricesea.html";
    };
    if (valueTotal == 3131 || valueTotalx == 3131) {
        location.href = "restaurants/highpricemeat.html";
    };
    if (valueTotal == 3141 || valueTotalx == 3141) {
        location.href = "restaurants/highpricevegan.html";
    };
    if (valueTotal == 1112 || valueTotalx == 1112 || valueTotal == 2112 || valueTotalx == 2112 || valueTotal == 3112 || valueTotalx == 3112 || valueTotal == 1122 || valueTotalx == 1122 || valueTotal == 1132 || valueTotalx == 1132 || valueTotal == 1142 || valueTotalx == 1142 || valueTotal == 2112 || valueTotalx == 2112 || valueTotal == 2122 || valueTotalx == 2122 || valueTotal == 2132 || valueTotalx == 2132 || valueTotal == 2142 || valueTotalx == 2142 || valueTotal == 3112 || valueTotalx == 3112 || valueTotal == 3122 || valueTotalx == 3122 || valueTotal == 3132 || valueTotalx == 3132 || valueTotal == 3142 || valueTotalx == 3142) {
        location.href = "party.html";
    };

}) //end submit.on click function

}); //end document.ready function