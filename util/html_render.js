
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