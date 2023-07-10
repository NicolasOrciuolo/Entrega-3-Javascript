import { arrayCarrito } from './recetas.js'



const botonVolver = document.getElementById("volver");
botonVolver.addEventListener("click", () => {
   window.location.replace('../recetas.html');
})
