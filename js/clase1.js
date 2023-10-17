//variable: es un espacio en memoria que utilizamos para almacenar datos.

//declarar: es cuando creo una variable
//inicializar: es cuando le asigno una variable


/*let miVariable = "variable"

console.log(miVariable)*/

/* let segundaVariable //camelcase
let tercera_variable //snakecase
let CuartaVariable //cobalcase */


// las variables no pueden llevar espaciós

//no puede llevar (-)

//let quinta-variable

//no puede comenzar con un numero.

//let 12sextaVariable



//tipos de variables:

//let un valor que nosotros podemos modificar
/*let total = 99;
total= 120;
console.log(total)*/

//const es un valor especifico, no podemos modificar
/*const precio = 15;
console.log(precio)*/

//var: ya no se usa hoy en dia
/*var suma = 25;
suma =20;
console.log(suma);*/


//tipos de datos:
//numericos o numbers

//#region tapar
let numero1 = 55;
let numero2 = 5.5;
let suma = numero1 + numero2;
console.log(suma);
//#endregion tapar

let numero3 = 55;
let numero4 = 5.5;
let resta = numero1 - numero2;
console.log(resta);

//string o cadena de texto

let saludo = "hola como estas?";
let despedida = "Adios";
console.log(saludo);
console.log(despedida);

//concatenar variables

let nombre = "soy matias"
console.log(saludo + " " + nombre);

//interpolación 
console.log('${saludo} ${nombre}');

//Booleanos

let istrue = true; //1
let isfalse = false; //0

//null

let datonulo = null;

/*Datos de objetos*/

//array, arreglos y matriz

let array = ["holaa", istrue, datonulo, isfalse];
console.log(array);

//objeto

let persona = {
    nombre: "Elias",
    apellido: "Fernandez",
    edad: 19,
};
console.log(persona);

/*tipos de operadores*/

//aritmeticos:

let datoA = 22;
let datoB = 33;

/*
+
-
*
/
%
*/

let suma2 = datoA + datoB
console.log(suma2);

let resta2 = datoA - datoB
console.log(resta2);

let multiplicación = datoA * datoB
console.log(multiplicación);

let division = datoA / datoB
console.log(division); //el Math.floor (deja el numero redondo para abajò) y math.sign(redondea para arriba)

let resto = datoA % datoB
console.log(resto)

//ejercició

let ejercició = (datoA + datoB) * 2;
console.log(ejercició);

//unitarios

let datoC = 5;
let datoD = 10;
++datoC;
--datoD;
console.log(datoC);
console.log(datoD);


//comparación o relacional 
/*
< (menor que)
> (mayor que)
<= (menor igual)
>= (mayor igual)
== (igual , igual)
!= (distinto que)
=== (extrictamente igual)
!== (Extrictamente diferente)
*/

let datoE = 5;
let datoF = 4;
let datoG = "5";

console.log(datoE<datoF)
console.log(datoE>datoF)
console.log(datoE<=datoF)
console.log(datoE>=datoF)
console.log(datoE==datoF)
console.log(datoE!=datoG)
console.log(datoE===datoG)

/* clase mas adelante
const span = document.getElementById("hola");
console.log(span.innerHTML) */