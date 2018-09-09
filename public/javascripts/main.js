$(document).ready(function(){
    var path = [];
    var index=0;
    var finished=false;
    var finished_slide = true;

    let c_next =$('#c_next');
    let c_previous =$('#c_previous');


    c_next.hide();
    c_previous.hide();


    $('#numPregunta').html(`Pregunta ${index+1}`);
    path.push(new Tree_Node());
    path[path.length-1].Ask();

    let btn_size=$('.opcionextra').height();
    $('.opciones').height(btn_size);
    $('.recargar').click(function () {
        location.reload();
    });


    $('#carouselExampleIndicators').on('slid.bs.carousel',function () {
        console.log("I'm done going sliding");
        finished_slide = true;
        c_next.show();
        c_previous.show();

        if(index === path.length-1){
            c_next.hide();
        }else if(index === 0){
            c_previous.hide();
        }
    });


    c_previous.click(function (e) {
        if(finished_slide){
        if(index>0){
            index--;
        }

        if((index===path.length-1)&&finished){
            $('#numPregunta').html("Recomendación");
        }else{
            $('#numPregunta').html(`Pregunta ${index*1+1}`);
        }
        console.log(index);
        finished_slide=false;
        }
    });

    c_next.click(function (e) {
        if(finished_slide){
        if(index<path.length-1){
            index++;
        }

        if((index===path.length-1)&&finished){
            $('#numPregunta').html("Recomendación");
        }else{
            $('#numPregunta').html(`Pregunta ${index*1+1}`);
        }
        console.log(index);
            finished_slide=false;
        }
    });

    $('body').on('click','li.indicador',function (e) {
        if(finished_slide) {
            index = (e.target.getAttribute("data-slide-to"));

            if ((index == path.length - 1) && finished) {
                $('#numPregunta').html("Recomendación");
            } else {
                $('#numPregunta').html(`Pregunta ${index * 1 + 1}`);
            }
            console.log(index);
            finished_slide=false;
        }
    });
    
    $('body').on('click','button.opciones',function (e) {
        finished=false;
            for(let i=index*1+1.0;i<path.length;i++){
                $('div').remove(`#item${i}`);
                $('li').remove(`#ind${i}`);
            }
            path.splice(index*1+1);
            console.log(path);

        index++;
        console.log(index);

        if(e.target.id==="third"){
            path.push(new Tree_Node(
                path[path.length-1],
                $(`.titulo_pregunta${index}`).text(),
                $(`.opcionextra`).text(),
                index)
            );
        }else{
            $('#numPregunta').html(`Pregunta ${index+1}`);
            let ind=parseInt(e.target.id);
            path.push(new Tree_Node(
                path[path.length-1],
                $(`.titulo_pregunta${index}`).text(),
                $(`.opcion${ind}`).text(),
                index)
            );
        }
        createCard(index);
        finished = path[path.length-1].Ask();
        console.log(path);
    });
    $('body').on('click','button.btn-final',function (e) {
        $('#sendData').val(JSON.stringify(path));
        $('#opc_db').val(this.id);
        console.log(path);
        $('#pathData').submit();
    })



});

function createCard(index){

    let card = ` <div id="item${index}" class="carousel-item w-100" >
                    <div class="mx-auto w-75 mt-2 mb-5">
                        <h2 class="titulo_pregunta${index+1} text-center card-title mb-4">Pregunta texto</h2>
                        <div id="options${index}" class="mx-auto text-center row">
                            <div class="col-md">
                            <button id="${index*2+1}" type="button" class="mx-3 w-50 opciones opcion${index*2+1} btn-danger btn-lg opcion-select">OPC1</button>
                            </div>
                            <div class="col-md">
                            <button id="${index*2+2}" type="button" class="mx-3 w-50 opciones opcion${index*2+2} btn-danger btn-lg opcion-select">OPC2</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    let indicator=`<li id="ind${index}" data-target="#carouselExampleIndicators" class="indicador" data-slide-to="${index}" class="active"></li>`
    $('.carousel-inner').append(card);
    $('.carousel-indicators').append(indicator);
    $('#carouselExampleIndicators').carousel(index);

}
