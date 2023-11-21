// Local storage - Que es? - Almacenar y recuperar datos de local storage - Ejercicio practico

// reference
const btnRegister = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const spanMessage = document.getElementById("message");
configErrorMessage();

// Variables
let _email, _password = "";

const KEYS = {
    USER_KEY: "usuarios"
}



// Events
email.addEventListener("change", function (e) {
    _email = e.target.value;
})

password.addEventListener("change", function (e) {
    _password = e.target.value;
})



// try catch-> sirve para capturar errores
btnRegister.addEventListener("click", function (e) {
    // preventdefault() evita que el boton realice esa acción por defecto
    e.preventDefault();
    try {
        validateUser();
        if (login(_email, _password)) {
            refresh(_email);
        }
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
function login(email, password) {
    const usersLs = localStorage.getItem(KEYS.USER_KEY);

    if (!usersLs) {
        throw new Error("No existe el usuario");
    }
    const usuarios = JSON.parse(usersLs);
                    // callback
    const usuario = usuarios.find(function (user) {
        return user.email === email;
    });
    if (!usuario) {
        throw new Error("El usuario o la contraseña no coinciden");
    }

    if (usuario.password === password) {
        return true;
    } else {
        throw new Error("El usuario o la contraseña no coinciden");
    }
}

function refresh(_email) {
    let li = document.createElement("li");
    let spanMail = document.createElement("span");
    spanMail.style.color = "green";
    spanMail.innerText = _email + " " +  ": Activo";
    //   appendChild agrega un elemento HTML a la lisde de elemento HTML al final.
    li.appendChild(spanMail);
    userList.appendChild(li);

}

function validateUser() {
    if (!_email || _email.trim() === "") {
        throw new Error("El email es obligatorio");
    } else if (!_password || _password.trim() === "") {
        throw new Error("La contraseña es obligatorio");
    }
}

function configErrorMessage() {
    spanMessage.style.color = "red";
    spanMessage.style.fontSize = "0.6rem";
    spanMessage.style.display = "block";
    spanMessage.style.textAlign = "center";

}

