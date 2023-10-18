//prompt: levanta una ventana en el navegador para solicitar al usuario el ingreso de datos.

//herramienrts:
//let numeroIngresado = prompt("ingrese su edad");
//alert(`el numero ingresado fue ${numeroIngresado}`);


//-- "hola" -> NaN -> Not a Number
//let numero = parseInt (numeroIngresado);
//let numero_b = Number (numeroIngresado);
//let numero_c = +numeroIngresado;



/*Dar acceso si es mayor de edad y si no lo es no dar acceso*/

let numeroIngresado = prompt("ingrese su edad");
let numero_c = +numeroIngresado;
//isNaN -> intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.

//codigo normal
//el isNaN es porque me aparecio como (NaN)
if(isNaN(numero_c)){
   //por favor ingrese un nùmero
}else{
if(numero_c >= 18)
{
    alert("Acceso Permitido, puede comprar alcohol y cigarros");
}else{
    alert("Acceso denegado, el usuario no es mayor de edad.")
}
}

//refactorización de código

 if(numero_c >= 18)
 {
     alert("Acceso Permitido, puede comprar alcohol y cigarros");
 }else{
     alert("Acceso denegado, el usuario no es mayor de edad.")
 } 


 //ejemplo de -> else if:
/*
 if(numero_c > 18){
    alert("se puede vender bebidas alcoholicas");
 }else if(numero_c === 18){
    alert("se puede vender solo bebidas");
 }else{
    alert("no se puede vender alcohol"); 
 } */



//otro ejemplo de -> else if:
/*
let cargo = "gerente de ventas" ;

if (cargo === "administrador") {
    console.log("tiene todos los permisos");
} else if (cargo === "gerente de ventas") {
    console.log("tiene permisos para acceder a todo lo relacionado a ventas");
} else if (cargo === "vendedor") {
    console.log("tiene permisos para acceder a ventas pero no puede acceder a devoluciones, etc...");
}else{
    console.log("tiene permisos para comprar y ver productos disponibles al publico");
} */