// Funciones anonimas y callbacks - que son? - Declaración - Manejo del Dom - ejemplo.


// Funciones anonimas (1) y callbacks (2)


//estas cosas sirven para anidar codigo 

// function ImprimirEnConsola(res) {

//     console.log(res);
// }

// function extraerUno(res) {

//     return res - 1;
// }

// function suma(a, b, funcionParametro) {

//     const resultado = a + b;
//     funcionParametro(resultado);
// }

// suma(20, 20, ImprimirEnConsola);



// function CrearUsuario(UserName, Password, repass, FechaCreacion, email, Validar) {
//     // callback -> referencia a una funcion que llama a otra  funcion por parametro
//     // genera dependencia
//     // internamente en la funcion
//     // incrementa el acoplamiento
//     // los callback sirven para permitirme a mi extender la funcionalidad de mi codigo.
//     if (Validar !== undefined || Validar !== null) {
//         Validar(UserName, Password, repass, FechaCreacion, email,);
//     } else {
//         console.log("No se envio el callback");
//     }


// }

// function ValidarStrings(UserName, email,) {

//     if (UserName === " " || UserName === null || UserName === undefined)
//         throw new Error("El usuario es obligatorio");
//     // toda la logica necesito para ejecutar mi función.

// }

// function ValidarDates(FechaCreacion) {
//     if (FechaCreacion < date.now()) {
//         throw new Error("no se puede crear un usuario con una fecha pasada");
//     }
// }

// function ValidarPassword(Password, repass,) {
//     // !== -> es distinto
//     if (Password !== repass) {
//         throw new Error("las contraseñas deben coincidir")
//     }
// }


// CrearUsuario(
//     "EliasGF",
//     "123456",
//     "123456",
//     Date.now,
//     "eliasfernandez@gmail.com",
//     function (UserName, Password, repass, FechaCreacion, email,) {
//         ValidarStrings(UserName, email);
//         ValidarDates(FechaCreacion);
//         ValidarPassword(Password, repass);
//     }
// );

// CrearUsuario(
//     "EliasGF",
//     "123456",
//     "123456",
//     Date.now,
//     "eliasfernandez@gmail.com",
//     function (UserName, Password, repass, FechaCreacion, email,) {
//         ValidarStrings(UserName, email);
//         ValidarPassword(Password, repass);
//     }
// );

// CrearUsuario(
//     "EliasGF",
//     "123456",
//     "123456",
//     Date.now(),
//     "eliasfernandez@gmail.com",

//     function (UserName, Password, repass, FechaCreacion, email,) {
//    console.log(UserName, Password, repass, FechaCreacion, email);
//     }
// );

// CrearUsuario(
//     "EliasGF",
//     "123456",
//     "123456",
//     Date.now,
//     "eliasfernandez@gmail.com",
   
// );


// ¿Que es un callback?-> es una funcion que se ejecuta dentro de otra funcion y que se pasa por parametro.

// function suma(a,b, accion) {
//     const resultado = a + b;
//     if(accion === undefined || accion === null){
//         return resultado;
//     }else{
//         accion(resultado);
//     }
// }

// function ImprimirEnConsola(Valor){
//     console.log(`el valor impreso desde la funcion ImprimirEnConsola es: ${Valor}`);
// }

// function ImprimirEnAlert(valor){
//     alert(`El valor impreso desde el Alert es: ${valor}`);
// }

// function AgregarMontoPorAntiguedad(valor){
//     let resultado = valor + 150;
//     console.log(`El resultado del sueldo es: ${resultado}`)
// }

// const resultado = suma(7,15,AgregarMontoPorAntiguedad);

// // si quiero que aparezca esto en una de la function tengo que poner return resultado
// if(resultado !== undefined){
//     console.log(`el valor de la suma sin pasar por la funcion AgregarMontoPorAntiguedad es: ${resultado}`)
// }



// funcion anonima
/*Las funciones anónimas son un recurso ampliamente utilizado por los programadores de JavaScript. 
Esto nos permite no asignarle a un nombre a un conjunto de instrucciones que deseemos ejecutarlo sin necesidad de asociarlo.*/



// function suma (a,b, accion){
//     accion(a + b);
// }

// funcion anonima la cree (function(resultado) la creo y la ejecuto en el momento
// porque no la necesito en otro lado.

// suma(15,20, function(resultado) {
//   alert(`El resultado de la suma desde una funcion anonima es: ${resultado}`);
// });


// Document object model -> DOM
// El archivo html donde yo ejecuto mi scrip
// Querys -> consulta

const span_html = document.getElementById("contador");
const add_btn = document.getElementById("add");
let contador = 0;
span_html.innerText = contador;

console.log(span_html)

add_btn.addEventListener("click", function(){
    contador++;
    if(contador % 2 === 0){
        span_html.style.color = "red";
    }else{
        span_html.style.color = "green";
    }

    span_html.innerText = contador;
})

const remove_btn = document.getElementById("remove");

remove_btn.addEventListener("click", function(){
    contador--;
    if(contador % 2 === 0){
        span_html.style.color = "red";
    }else{
        span_html.style.color = "green";
    }

    span_html.innerText = contador;
})
