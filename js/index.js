import {bbdd} from './bbdd.js'

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


const buttonLogin = document.getElementById("loginButton");

buttonLogin.addEventListener("click", () => {
   const usuarioEncontrado = bbdd.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña)
   if (usuarioEncontrado) {
      console.log("USUARIO ENCONTRADOOOOOOOOOOOOO");
      const auth = { name: usuarioEncontrado.usuario, isLogin: true }
      localStorage.setItem("isLogin", JSON.stringify(auth));
   } else {
      console.log("No existe el usuario");
   }
})



