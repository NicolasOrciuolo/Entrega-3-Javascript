import {bbdd} from './bbdd.js'

const buttonLogin = document.getElementById("loginButton");

buttonLogin.addEventListener("click", () => {
   console.log("CLICK DE BOTON")
})

const login = document.querySelector("#login");

const user = {
   email: '',
   contraseña: ''
}

const inputs = document.querySelectorAll("input"); //Atrapo todos los elementos tipo input

inputs.forEach((el) => {
   el.addEventListener("input", (e) => {

      const { target } = e; 
      const { name, value } = target; 

      if (name == "email") {
         user.email = value;
      }

      if (name == "pass") {
         user.contraseña = value;
      }
   })

}); 


