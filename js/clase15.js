// Practica manejo DOM
/*
const spn = document.getElementById("counter")
let counter = 0;
// binding: una asociacion entre un elemento estatico 
// y un elemento dinámico

document.getElementById("add").addEventListener("click", function () {
    addcounter(1)

});

document.getElementById("addFive").addEventListener("click", function () {
    addcounter(5)

});

document.getElementById("addSix").addEventListener("click", function () {
    addcounter(10)

});


function addcounter(number) {
    counter += number;
    refresh();
}

function refresh() {
    // se encarga de actualizar con los últimos datos 
    // el html y modificar el valor del span
    spn.innerText = counter;
}*/

// reference
const btnRegister = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repetPassword = document.getElementById("repetpassword");
const spanMessage = document.getElementById("message");
const userList = document.getElementById("userList");
configErrorMessage();

// Variables
let _email, _password, _repetPassword = "";
let users = [];

// Events
email.addEventListener("change", function (e) {
    _email = e.target.value;
})

password.addEventListener("change", function (e) {
    _password = e.target.value;
})

repetPassword.addEventListener("change", function (e) {
    _repetPassword = e.target.value;
})

// try catch-> sirve para capturar errores
btnRegister.addEventListener("click", function (e) {
    // preventdefault() evita que el boton realice esa acción por defecto
    e.preventDefault();
    try {
        validateUser();
        addUser();
        refresh();
    } catch (error) {
        spanMessage.innerText = error.message;
        btnRegister.disabled = true;
        setTimeout(function () {
            spanMessage.innerText = "";
            btnRegister.disabled = false;
        }, 1500);
    }
})



// Functions
function addUser() {
    let newUser = {
        email: _email,
        password: _password,
    };
    users.push(newUser);
}

function refresh() {
    userList.innerHTML = "";
    users.forEach(function (user) {
        let li = document.createElement("li");
        let spanMail = document.createElement("span");
        spanMail.style.color = "green";
        spanMail.innerText = user.email;
        //   appendChild agrega un elemento HTML a la lisde de elemento HTML al final.
        li.appendChild(spanMail);
        userList.appendChild(li);
    })
}

function validateUser() {
    if (!_email || _email.trim() === "") {
        throw new Error("El email es obligatorio");
    } else if (!_password || _password.trim() === "") {
        throw new Error("La contraseña es obligatorio");
    }else if (!_repetPassword || _repetPassword.trim() === ""){
        throw new Error ("Repita la contraseña");
    }
}

function configErrorMessage() {
    spanMessage.style.color = "red";
    spanMessage.style.fontSize = "0.6rem";
    spanMessage.style.display = "block";
    spanMessage.style.textAlign = "center";


}

// Clases
class user {
    constructor(email, password, repetPassword) {
        this.email = email;
        this.password = password;
        this.repetPassword = repetPassword;
    }
}