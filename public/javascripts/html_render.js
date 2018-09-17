
let make_card = function(index,question,options){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">
                            <h2 class="titulo_pregunta${index+1} text-center card-title mb-4">${question}</h2>
                            <div id="options${index}" class="mx-auto text-center row">`;
    let options_html = ``;
    for(let i=0; i<options.length;i++){
        options_html +=`<div class="col-md">
                            <button id="${index*2+1}" type="button" class="mx-3 w-50 opciones opcion${index*2+1} btn-danger btn-lg opcion-select">${options[i]}</button>
                        </div>`;
    }

    let footer_html =`</div></div></div>`;

    return head_html+options_html+footer_html;
};

let make_result_card = function(index,options){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">`;

    let results = `<div class="row">`;
    for(let i=0;i<options.length;i++){
        results+=`<div class="col-md">
                        <h3 class="px-3">options[i]</h3>
                        <img class="img-fluid px-2" src="../images/${options[i].split(' ').join('_')}.png">
                    </div>`;
    }
    results+=`</div>`;

    let options_html = `<div id="options${index}" class="mx-auto text-center row">`;
    for(let i=0; i<options.length;i++){
        options_html +=`<div class="col-md">
                            <button id="${index*2+1}" type="button" class="mx-3 w-50 opciones opcion${index*2+1} btn-danger btn-lg opcion-select">${options[i]}</button>
                        </div>`;
    }

    let footer_html =`</div></div></div>`;

    return head_html+results+options_html+footer_html;
};

let make_indicator = function(index){return `<li id="ind${index}" data-target="#carouselIndicators" class="indicador" data-slide-to="${index}" class="active"></li>`}

