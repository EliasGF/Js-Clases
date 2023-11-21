// Local storage - Que es? - Almacenar y recuperar datos de local storage - Ejercicio practico
// localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador.

const btnLogin = document.getElementById("login");
const btnLogout = document.getElementById("logout");
const div = document.getElementById("container");
const span = document.createElement("span");

let isLogged = localStorage.getItem("conectado");;

if (!isLogged) {
    isLogged = false;
}

btnLogin.addEventListener("click", function () {
    isLogged = true;
    refresh();
});

btnLogout.addEventListener("click", function () {
    isLogged = false;
    refresh();
});


function refresh() {
    if (isLogged) {
        span.innerText = "Activo";
        span.style.color = "green";
        btnLogout.style.display = "block";
        btnLogin.style.display ="none";
    } else {
        span.innerHTML = "Desconectado";
        span.style.color = "red"
        btnLogin.style.diplay = "block";
        btnLogout.style.display = "none";
    }
    div.appendChild(span); //Agregamos el elemento span al contenedor 
    // key -> ID
    localStorage.setItem("conectado", isLogged);

}