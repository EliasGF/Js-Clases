//  DOM - Repasando conceptos - formas de capturar etiquetas - Ejercicio practico

console.log(document);
// ECMASCRIP5


const counter = document.getElementById("counter");
let ValorCounter = 0;

const btn_add = document.getElementById("add");
const btn_remove = document.getElementById("remove");
// asociar el valor del texto de la etiqueta
// a una variable
// Document objetc Model

// ejemplo introductorio:
// callback
btn_add.addEventListener("click", function () {
    ValorCounter++;
    refresh();
    counter.style.color = "blue";
})

btn_remove.addEventListener("click", function () {
    ValorCounter--;
    refresh();
    counter.style.color = "red";
})

function refresh() {
    counter.innerText = ValorCounter;
}



// capturar los datos de un input
// Cuando el usuario haga click en el bóton enviar
// change -> cuando el elemento input recibe cambios en su valor
// input -> value -> el valor de lo que el usuario escribió
// almacenar ese mensaje en un array
// luego de almacenar ese mensaje en un array
// Lenght
// incrementar el valor del contador que se encuentra en 
// nuestro icono.


const message = document.getElementById("message");
const btnSend = document.getElementById("send");
const counterr = document.getElementById("counterr");

let _message, _counter, _messages;


// el signo (?) pregunta internamente si message es null o no es null
// me ahorra if(message !== null){ 
// message.addeventlistener; }

message?.addEventListener("change", function (event) {
    _message = event.target.value;
});

btnSend?.addEventListener("click", function () {

    if (!_messages) {
        _messages = [];
    }

    _messages.push(_message);
    refresh_Notification();
});

function refresh_Notification() {
    counterr.innerText = _messages.lenght;

    if (_messages.lenght > 0) {
        counterr.style.padding = "auto";
        counterr.style.borderRadius = "50%";
        counterr.style.backgroundColor = "orange";
    }
}

