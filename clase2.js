//Operadores Logicos.
//Operan sobre booleanos.
//true o false -> tradicionales
//true o false -> truefalse
//tablas de la verdad.
// AND=> &&  OR=> ||  !=> NOT

/*
let a = 5;
let b = 3;
let booleano = true; 
let esMayor = a > b; 
*/

//operador logico AND=>&&
const llovio = true;
const cayeron_pidras = false;
const resultado = llovio && cayeron_pidras;
console.log("el resultado AND es:"  + resultado);

//operador logico OR=> ||
const voy_yo = true;
const va_mi_hermano = false;
const resultado_b = voy_yo || va_mi_hermano;
console.log("el resultado OR es:"  + resultado_b);

//operador logico NOT=> !

const quiero_dormir = false;
console.log("invertir booleano:" + !quiero_dormir);

//paradigma de programación funcional.
//programación condicional o estructuras de control.


//condiciones -> booleanos
// IF - ELSE - ELSE IF


//ejemplo: como saber si (5) es par o impar.

let valor = 5;
const rto = valor % 2 === 0;
console.log(rto);

//pregunta => false === true -> false
if(rto){
console.log ("es par");
}else{
console.log("es impar");
}

//ejemplo mio:

let valor_2 = 2;
const rt2 = valor_2 % 2 === 0;
console.log(rt2);

if(rt2 === true && valor_2 > 2){
console.log("es par");
}else{
    console.log("es impar");
}

//ejemplo: estos sueldos pagan o necesitan impuestos a las ganancias?

const piso_imp = 550000;

let sueldo_empleadoA = 32000;
let sueldo_empleadoB = 150000;
let sueldo_empleadoC = 780000;

if(sueldo_empleadoA > piso_imp){
    console.log("paga impuestos a las ganancias");
}else{
    console.log("no paga impuestos a las ganancias");
}

//ejemplo 2:


let sueldo_empleadoD = 32000;
let excento_empleadoD= false;

let sueldo_empleadoE = 150000;
let excento_empleadoE= false;

let sueldo_empleadoF = 780000;
let excento_empleadoF= true;

const result =  sueldo_empleadoD > piso_imp;
console.log("El valor de result es:" + result);

const resultado_excento = excento_empleadoD === false;
console.log("El valor de result_excento es:" + resultado_excento);

const resultado_final = result && resultado_excento;
console.log("El resultado de result && resultado_excento es :" + resultado_final);

if(resultado_final){
console.log("Resultado final ES verdadero");
}else{
    console.log("Resultado final Es falso")
}

if(sueldo_empleadoD > piso_imp && excento_empleadoD === false){
    console.log("paga impuestos a las ganancias");
}else{
    console.log("no paga impuestos a las ganancias");
}