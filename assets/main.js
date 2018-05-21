
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