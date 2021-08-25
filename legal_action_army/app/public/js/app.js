$(document).ready(function(){
    $("#current-question").html("1");
    var current_question = 1;
    $.getJSON( "js/questions.json", function( data ) {
        var questions = data.paraquat.questions;
        $("#total-question").html(questions.length);

        var container = $("question-example");
        questions.forEach((element, index) => {
            $("#questions").append(
                '<div class="container-fluid" id="question-'+ index +'">\
                    <div class="row justify-content-center">\
                        <div class="col-md-6 col-sm-12 text-center">\
                            <span class="yellow" id="question">'+element.question+'</span>\
                        </div>\
                    </div>\
                </div>');
            if ( element.answers_type == 'yes_no' ) {
                $("#question-" + index).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-2 p-2">\
                            <button type="button" class="btn btn-primary w-100 step-two-for-me">'+element.answers_value[0]+'</button>\
                        </div>\
                        <div class="col-md-2 p-2">\
                            <button type="button" class="btn btn-success w-100 step-two-for-loved">'+element.answers_value[1]+'</button>\
                        </div>\
                    </div>'
                    );
            } else if ( element.answers_type == 'input' ) {
                $("#question-" + index).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-1 p-2">\
                            <input type="text" name="'+element.input_name+'" class="form-control text-center" placeholder="'+element.input_placeholcer+'" maxlength="4">\
                        </div>\
                        <div class="col-md-1 p-2">\
                            <button type="button" class="btn btn-success w-100 step-four-for-me">'+element.btn_text+'</button>\
                        </div>\
                    </div>'
                );
            } else if ( element.answers_type == 'select' ) {
                var select_option = "";
                element.answers_value.forEach((answer, i) => {
                    select_option += '<option value="'+answer+'">'+answer+'</option>';
                });
                console.log(select_option);
                $("#question-" + index).append(
                    '<div class="row justify-content-center pb-5">\
                        <div class="col-md-2 col-sm-10 text-center pb-2">\
                            <select class="form-select form-control form-select-md" name="'+element.select_name+'">\
                                <option selected value="">-- Select --</option>\
                                ' + select_option + '\
                            </select>\
                        </div>\
                        <div class="col-md-1 p-2">\
                            <button type="button" class="btn btn-success w-100 step-four-for-me">'+element.btn_text+'</button>\
                        </div>\
                    </div>'
                );
            }
            
        });

    });
});