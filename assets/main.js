
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

$(document).ready(function() {


$('input:radio').on("click", function(){
    value1 = $("form input[name='q1']:checked").val();
    console.log("value1=" + value1);
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
    console.log(valueTotal);

    if (valueTotal == 1111 || valueTotal == 1121 || valueTotal == 1131 || valueTotal == 1141) {

    };
    if (valueTotal == 1211 || valueTotal == 1221 || valueTotal == 1231 || valueTotal == 1241) {

    };
    if (valueTotal == 1311 || valueTotal == 1321 || valueTotal == 1331 || valueTotal == 1341) {

    }; 
    if (valueTotal == 1411 || valueTotal == 1421 || valueTotal == 1431 || valueTotal == 1441) {
        location.href = 'http://mcdonalds.com';
    };
    if (valueTotal == 2111 || valueTotal == 2121 || valueTotal == 2131 || valueTotal == 2141) {

    }; 
    if (valueTotal == 2211 || valueTotal == 2221 || valueTotal == 2231 || valueTotal == 2241) {

    };
    if (valueTotal == 2311 || valueTotal == 2321 || valueTotal == 2331 || valueTotal == 2341) {

    };
    if (valueTotal == 2411 || valueTotal == 2421 || valueTotal == 2431 || valueTotal == 2441) {
        location.href = 'http://starbucks.com';
    };
    if (valueTotal == 3111 || valueTotal == 3121 || valueTotal == 3131 || valueTotal == 3141) {

    };
    if (valueTotal == 3211 || valueTotal == 3221 || valueTotal == 3231 || valueTotal == 3241) {

    };
    if (valueTotal == 3311 || valueTotal == 3321 || valueTotal == 3331 || valueTotal == 3341) {

    };
    if (valueTotal == 3411 || valueTotal == 3421 || valueTotal == 3431 || valueTotal == 3441) {
        location.href = 'http://kfc.com';
    };
    if (valueTotal == 4111 || valueTotal == 4121 || valueTotal == 4131 || valueTotal == 4141) {

    };
    if (valueTotal == 4211 || valueTotal == 4221 || valueTotal == 4231 || valueTotal == 4241) {

    };
    if (valueTotal == 4311 || valueTotal == 4321 || valueTotal == 4331 || valueTotal == 4341) {

    };
    if (valueTotal == 4411 || valueTotal == 4421 || valueTotal == 4431 || valueTotal == 4441) {
        location.href = 'http://google.com';
    };

}) //end submit.on click function

}); //end document.ready function