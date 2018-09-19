
let make_card = function(index,question,options,examples){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">
                            <h2 class="titulo_pregunta${index+1} text-center card-title mb-4">${question}</h2>`;
    let examples_html = ``;
    if(examples!= null){
        examples_html+=`<div class="row my-lg-3">`;
        for(let i=0;i<examples.length;i++){
            examples_html+=`<div class="col-md">
                            <h5 class="text-center">${examples[i].title}</h5>
                            <ul class="${examples.length>1?"":"text-center row"}" style="list-style-position: initial">`;

            for(let j=0;j<examples[i].examples.length;j++){
                examples_html+=`<div class="col-md ${examples.length>1?"":"d-flex flex-column align-items-center"} ">
                                <li class=""><h6>${examples[i].examples[j]}</h6></li>
                                </div>`;
            }
            examples_html+=`</ul></div>`;
        }

        examples_html+=`</div>`;
    }
    let options_html = `<div id="options${index}" class="mx-auto text-center row">`;
    for(let i=0; i<options.length;i++){
        options_html +=`<div class="col-md">
                            <button id="${index*2+1}" type="button" href="#" class="mx-3 w-50 opciones opcion${index*2+1} btn-danger btn-lg opcion-select">${options[i]}</button>
                        </div>`;
    }

    let footer_html =`</div></div></div>`;

    return head_html+examples_html+options_html+footer_html;
};

let make_result_card = function(index,options){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">`;

    let results = `<div class="row">`;
    for(let i=0;i<options.length;i++){
        results+=`<div class="col-md text-center">
                        <h3 class="px-3">${options[i]}</h3>
                        <img class="img-fluid px-2" src="../images/${options[i].split(' ').join('_')}.png">
                    </div>`;
    }
    results+=`</div>`;

    let options_html = "<h3 class='text-center'>¿Su base de datos actual se encuentra entre las opciones recomendadas?</h3>" +
        "<div class='mx-auto text-center'>" +
        "<form id='pathData' method='post' action='/results'>" +
        "<input id='opc_db' name='opc_db' type='hidden' value=''>" +
        "<div class='row'>"+
        "<div class='col-md'><button id='Si' type='button' class='mx-3 w-50 btn-final btn btn-lg btn-danger'>Sí</button></div>" +
        "<div class='col-md'><button id='No' type='button' class='mx-3 w-50 btn-final btn btn-lg btn-danger'>No</button></div>" +
        "</div></form></div>";


    let footer_html =`</div></div></div>`;

    return head_html+results+options_html+footer_html;
};

let make_indicator = function(index){return `<li id="ind${index}" data-target="#carouselIndicators" class="indicador" data-slide-to="${index}" class="active"></li>`}

