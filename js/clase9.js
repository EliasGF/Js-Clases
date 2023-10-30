// Repaso gral-Funciones

// let edad = 18;

//strings -> "hola"
//Null -> cancelar
//numeros
//prigramación dinamica.

// let a = +prompt("a");
// let b = +prompt("b");


// if (isNaN(a) || isNaN(b)) {
//     alert("no son numeros");
// } else {
//     const resultado = a + b;
//     alert(resultado);
// }

// const nombre = "Elias";

//parametros-> los valores que necesita
// mi funcion para ejecutarse correctamente

// function suma(a, b) {
//     /*Intenta ejecutar su logica aca */
// }

// function saludar(nombre) {
// }

// invocar funcion
// let nombre_usuario = prompt("ingrese su nombre");
// saludar("Elias");

//parameterlees-> no tiene parametros
// function solicitarNumeros(){
//     let a = +prompt("a");
//     let b = +prompt("b");
// }



// let valor_respuesta_de_funcion =  solicitarNumeros()
// console.log(valor_respuesta_de_funcion[0]);
// console.log(valor_respuesta_de_funcion[1]);

// para llamar a a+b se necesita un array[]
// function solicitarNumeros(){
//     let a = +prompt (" ingrese el primer valor");
//     let b = +prompt (" ingrese el segundo valor");
//     return [a,b];
// }



//Funcion que valide
// || -> oh


let valor_respuesta_de_funcion = mult();
console.log(valor_respuesta_de_funcion);

function solicitarNumeros() {
    let a = +prompt("ingrese su primer valor");
    let b = +prompt("ingrese su segundo valor");
    return [a, b];
}

function mult() {
    let res = solicitarNumeros();
    validate(res[0], res[1]);
    return res[0] * res[1];
}
// throw new Error -> hace que se corte toda la ejecucion.
function validate(paramA, paramB) {
    if (isNaN(paramA) || isNaN(paramB)) {
        throw new Error("debe ingresar numeros ");
    }
}