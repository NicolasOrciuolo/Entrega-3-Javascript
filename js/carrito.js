import { bbdd, inicializarRecetas } from './bbdd.js'

// CARRITO DE COMPRAS ######################################################################################
const arrayDeRecetas = [];
const menu = document.querySelector("#menu");

inicializarRecetas(arrayDeRecetas);

arrayDeRecetas.forEach((el) => {
   const tarjeta = document.createElement("div");
   tarjeta.innerHTML = ` 
                        <div class="col">
                           <div class="card w-70 text-center">
                              <img src="${el.foto}" class="card-img-top" alt="...">
                              <div class="card-body">
                                 <h1 class="card-title fs-3">${el.nombre}</h1>
                                 <h2 class="card-text fs-5">Precio: $${el.precio}</h2>
                                 <p class="card-text">${el.descripcion}</p>
                              </div>

                              <form class="row row-cols-lg-auto g-3 align-items-center">
                              <div class="col-12">
                                 <label class="visually-hidden" for="inlineFormInputGroupUsername"></label>
                                 <div class="input-group">
                                    <div class="input-group-text">Cantidad</div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="">
                                 </div>
                              </div>

                              <div class="col-12">
                                 <button type="submit" class="btn btn-primary">Seleccionar</button>
                              </div>


                           </div>
                        </div>
   `
   menu.appendChild(tarjeta);
})