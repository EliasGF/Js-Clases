// Local storage - Que es? - Almacenar y recuperar datos de local storage - Ejercicio practico

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

const KEYS = {
    USERS_KEY: "usuarios"
}

let users = [];
let lsUsers = localStorage.getItem(KEYS.USERS_KEY);
if (lsUsers) {
    console.log(lsUsers);
    users = JSON.parse(lsUsers);
    refresh();
}

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
    let json = JSON.stringify(users)
    localStorage.setItem(KEYS.USERS_KEY, json);
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
    });
}

function validateUser() {
    if (!_email || _email.trim() === "") {
        throw new Error("El email es obligatorio");
    } else if (!_password || _password.trim() === "") {
        throw new Error("La contraseña es obligatorio");
    } else if (!_repetPassword || _password.trim() === "") {
        throw new Error("Repita la contraseña");
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


// podemos crear etiquetas html desde js

// ejemplo:
/*
class myTag extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "Hello word";
    }
}

customElements.define("tag-custom", myTag);
*/