$("#question-one").hide();
$("#question-two").hide();
$("#question-three").hide();

$(document).ready(function(){
    $("#step-one").click(function(){
        $("#question-one").show();
    });

    $(".step-two-no").click(function(){
        $("#question-two").show();
        $('input[name="question-one"]').val($(".step-two-no").text());
    });

    $(".step-two-yes").click(function(){
        $("#question-two").show();
        $('input[name="question-one"]').val($(".step-two-yes").text());
    });

    $('.step-three').on('change', function() {
        $("#question-three").show();
        $('input[name="question-two"]').val(this.value);
    });

    $(".step-four-no").click(function(){
        $("#question-three").show();
        $('input[name="question-three"]').val($(".step-four-no").text());
        /* falta agregar el evento submit */
    });

    $(".step-four-yes").click(function(){
        $("#question-three").show();
        $('input[name="question-three"]').val($(".step-four-yes").text());
        /* falta agregar el evento submit */
    });
});