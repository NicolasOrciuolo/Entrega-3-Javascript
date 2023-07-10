import { bbdd, inicializarRecetas } from './bbdd.js'

// SELECCIÓN DE COMIDAS ######################################################################################
const arrayDeRecetas = [];
const menu = document.querySelector("#menu");
export const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];


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

                           </div>
                        </div>
   `

   const buttonAgregar = document.createElement("button");
   buttonAgregar.classList.add("col-12", "btn", "btn-primary");
   buttonAgregar.innerText = "Seleccionar";

   buttonAgregar.addEventListener("click", () => {
      arrayCarrito.push(el);
      console.log(arrayCarrito);
      localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: el.nombre + ' añadida al carrito',
         timer: 1500
      })
   })

   tarjeta.appendChild(buttonAgregar);
   menu.appendChild(tarjeta);

})

const botonCarrito = document.getElementById("irAlCarrito");
botonCarrito.addEventListener("click", () => {
   window.location.replace('../carrito.html');
})






