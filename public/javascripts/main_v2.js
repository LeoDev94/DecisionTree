$(document).ready(function() {

    let index = 0;
    let finished_slide = true;
    let finished_path = false;
    let path_length = 1;
    let hasclicked = false;
    let mySVGsToInject = document.querySelectorAll('.iconic-sprite');

    // Do the injection
    SVGInjector(mySVGsToInject);

    let current_question = $('.titulo_pregunta0').text();
    let indicators = $('#carouselIndicators');
    let c_next = $('#c_next');
    let c_previous = $('#c_previous');
    let body_handle = $('body');
    let num_pregunta = $('#numPregunta');

    let height_b = $('#b-2').height();
    let width_b = $('#b-2').width();
    $('.opciones').height(height_b*1);
    $('.opciones').width(width_b*1);

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
        if(!hasclicked){
            hasclicked = true;
           $.post("/quiz/answer",obj,function (data,status) {
               console.log(status,data);
               if(status === "success"){
                   for(let i=index*1+1.0;i<path_length;i++){
                       $('div').remove(`#item${i}`);
                       $('li').remove(`#ind${i}`);
                   }
                   index++;
                   num_pregunta.html(`Pregunta ${index+1}`);
                   process_data(data);
                   check_finished();
               }else{
                   console.log("Ajax, Error")
               }

           });
        }
        hasclicked = false;
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
        finished_path = data.new_data.result;
        path_length = data.new_data.path_length;
        let card = finished_path?make_result_card(index,data.new_data.options,data.dbs):make_card(index,data.new_data.question,data.new_data.options,data.new_data.examples);
        $('.carousel-inner').append(card);
        $('.carousel-indicators').append(make_indicator(index));
        current_question = data.new_data.question;
        $('#carouselIndicators').carousel(index);
        if(finished_path){
            same_size(data.new_data.options.length);
        }
    }
    function same_size(opt_length){
        let max = 0;
        for(let i=0;i<opt_length;i++){
            let h_title=$(`#db_result_title_${i}`);
            if(max<h_title.height()){
                max = h_title.height();
            }
        }
        $('.db_results').height(max*1);
    }

});