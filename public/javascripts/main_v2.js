$(document).ready(function() {

    let index = 0;
    let finished_slide = true;
    let finished_path = false;
    let path_length = 1;


    let current_question = $('.titulo_pregunta0').text();
    let indicators = $('#carouselIndicators');
    let c_next = $('#c_next');
    let c_previous = $('#c_previous');
    let body_handle = $('body');
    let num_pregunta = $('#numPregunta');

    let btn_size=$('#b-2').height();
    $('.opciones').height(btn_size);

    indicators.carousel(index);
    num_pregunta.html(`Pregunta ${index+1}`);
    c_next.hide();
    c_previous.hide();

    indicators.on('slid.bs.carousel',function () {
        finished_slide = true;
        c_next.show();
        c_previous.show();

        if(index*1 === path_length-1){
            c_next.hide();
        }else if(index*1 === 0){
            c_previous.hide();
        }
    });

    c_previous.click(function (e) {
        if(finished_slide){
            if(index>0){
                index--;
            }
            check_finished()
            console.log(index);
            finished_slide=false;
        }
    });

    c_next.click(function (e) {
        if(finished_slide){
            if(index<path_length-1){
                index++;
            }
            check_finished();
            console.log(index);
            finished_slide=false;
        }
    });

    body_handle.on('click','li.indicador',function (e) {
        if(finished_slide) {
            index = (e.target.getAttribute("data-slide-to"));
            check_finished();
            console.log(index);
            finished_slide=false;
        }
    });


    body_handle.on('click','button.opciones',function (e) {
        let obj ={index:index,question:current_question,answer: e.target.textContent};
        finished_path = false;
        //console.log(obj);
       $.post("/quiz/answer",obj,function (data,status) {
           console.log(status,data);

           for(let i=index*1+1.0;i<path_length;i++){
               $('div').remove(`#item${i}`);
               $('li').remove(`#ind${i}`);
           }
           index++;
           num_pregunta.html(`Pregunta ${index+1}`);
           process_data(data);
           check_finished();
       });

    });

    body_handle.on('click','button.btn-final',function (e) {
        $('#opc_db').val(this.id);
        $('#pathData').submit();
    });

    function check_finished(){
        if((index*1===path_length-1)&&finished_path){
            num_pregunta.html("Recomendación");
        }else{
            num_pregunta.html(`Pregunta ${index*1+1}`);
        }
    }
    function process_data(data){
        finished_path = data.result;
        path_length = data.path_length;
        let card = finished_path?make_result_card(index,data.options):make_card(index,data.question,data.options,data.examples);
        $('.carousel-inner').append(card);
        $('.carousel-indicators').append(make_indicator(index));
        current_question = data.question;
        $('#carouselIndicators').carousel(index);
    }

});