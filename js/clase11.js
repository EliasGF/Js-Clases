// Repaso callbacks - Manejo del Dom - Ejercicio practico
// Cuando uno programa se hace sus propias herramientas ejemplo con "function"
// Hacer un codigo que sea facil de entender para uno mismo.

// Solid -> open closed -> cerrado a la modificacion y abierto a la extensión

// console.log(document);

// // document -> todo el html
// const input = document.getElementById("nombre");
// const span = document.getElementById("resultado");
// console.log(input);


// // //evento -> paradigma de programación
// // //-> programación orientada a evenetos

// // //-> patron de diseño -> patron observer
// // input.addEventListener("change", function(e){
// // console.log(e.target.value);
// // });


// // transcribo el valor de mi input al spam, cuando sale el foco


// input.addEventListener("change", function (e) {
// span.innerText = e.target.value;
// });


const inputEmail = document.getElementById("mail");
const inputPassword = document.getElementById("password");
const button = document.getElementById("btnLogin");

// el addEventListener me permite manipular que es lo que quiero hacer 
// cuando se haga un click, que es lo que necesito, lo que quiera etc...
// ejemplo:
button.addEventListener("click",function(){
    alert("se hizo click en el botón");
})