
let make_card = function(index,question,options,examples){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">
                            <h2 class="titulo_pregunta${index+1} text-center card-title mb-4">${question}</h2>`;
    let examples_html = ``;
    if(examples!= null){
        examples_html+=`<div class="row my-lg-3">`;
        for(let i=0;i<examples.length;i++){
            if(i*1!==0){
                examples_html+=`<div class="bg-danger" style="width: 3px"></div>`;
            }
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
                            <button id="${index*2+1}" type="button" class="mx-3 w-50 opciones opcion${index*2+1} btn-danger btn-lg opcion-select">${options[i]}</button>
                        </div>`;
    }

    let footer_html =`</div></div></div>`;

    return head_html+examples_html+options_html+footer_html;
};

function make_lists(options,dbs){
    let results = ``;
    for(let i=0;i<options.length;i++){
        results+=`<div class="col-md text-center">
                        <h3 id="db_result_title_${i}" class="px-3 db_results">${options[i]}</h3>
                        <div class = 'list-group'>`;
        for(let j=0;j<dbs[i].length;j++){
            results += `<a class="list-group-item list-group-item-action">${dbs[i][j].name}</a>`;
        }
        results+=`</div></div>`;
    }
    return results;
}

function make_big_list(options,dbs){
    let results=`<div class = 'list-group w-75 align-items-center mx-auto'>`;
    for(let i=0;i<options.length;i++){

        for(let j=0;j<dbs[i].length;j++){
            results += `<a href ='#' class="list-group-item list-group-item-action">
                            <h3>${dbs[i][j].name}</h3>
                        </a>`;
        }
    }
    results+=`</div>`;
    return results;
}

function make_images(options){
    let results = ``;
    for(let i=0;i<options.length;i++){
        results+=`<div class="col-md text-center">
                        <h3 id="db_result_title_${i}" class="px-3 db_results">${options[i]}</h3>
                        <img class="img-fluid px-2" src="../images/${options[i].split(' ').join('_')}.png">
                    </div>`;
    }
    return results;
}

let make_result_card = function(index,options,dbs){
    let head_html =  `<div id="item${index}" class="carousel-item w-100" >
                        <div class="mx-auto w-75 mt-2 mb-5">`;
    let results = `<div class="row my-4">`;
    results = results+ make_lists(options,dbs);
    results+=`</div>`;

    let options_html = "<h3 class='text-center'>¿Su base de datos actual se encuentra entre las opciones mostradas?</h3>" +
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

