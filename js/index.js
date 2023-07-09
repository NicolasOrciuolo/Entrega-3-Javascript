import { bbdd } from './bbdd.js'

const user = {
   email: '',
   contraseña: ''
}

const isAuth = JSON.parse(localStorage.getItem("isLogin")) || [];

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
      const auth = { name: usuarioEncontrado.email, isLogin: true }
      localStorage.setItem("isLogin", JSON.stringify(auth));
   } else {
      console.log("No existe el usuario");
   }
})

if (isAuth.isLogin) {
   window.location.replace = '../pag.html';
   window.location.reload();
}




