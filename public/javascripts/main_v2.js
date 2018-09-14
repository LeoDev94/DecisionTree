$(document).ready(function() {
    let current_question;
    let c_next = $('#c_next');
    let c_previous = $('#c_previous');

    c_next.hide();
    c_previous.hide();

    $('.opciones').click(function () {
       $.post("/v2/answer",{question:current_question,answer: this.text()},function (data,status) {
           console.log(status,data);
       });
    });

});