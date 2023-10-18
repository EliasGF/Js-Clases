//Repaso Js-Switch

/*
let cargo = "administrador";

if(cargo === "administrador"){
    console.log("tiene todos los permisos");
}
*/

//Estructura de control condicionales
//if - else - else if


//Estructura de control por valores SWITCH
//Necesitamos solicitarle al usuario cual es la operación que desea realizar

/*
const operacion = prompt("ingrese la operaciòn: 1suma---2resta");

switch (operacion) {
    case "1":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let a = prompt("ingrese el primer valor"); //String
        let b = prompt("ingrese el segundo valor"); //String
        let resultado = +a + +b;
if(isNaN(resultado)){
    alert("algunos de los valores ingresados no son numeros.");
}else{
    alert(resultado);
}
        break;
    case "2":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let c = prompt("ingrese el primer valor"); //String
        let d = prompt("ingrese el segundo valor"); //String
        let resultadoResta = +c - +d;
if(isNaN(resultadoResta)){
    alert("algunos de los valores ingresados no son numeros.");
}else{
    alert(resultadoResta);
}
       
        break;
    default:
        alert("ingrese los valores indicados pedazo de salame");
        break;
};

alert("continua por aca");
*/

//refactorización de codigo

const operacion = prompt("ingrese la operaciòn: 1suma---2resta");

switch (operacion) {
    case "1":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let a = prompt("ingrese el primer valor"); //String
        let b = prompt("ingrese el segundo valor"); //String
        let resultado = +a + +b;
if(isNaN(resultado)){
    alert("algunos de los valores ingresados no son numeros.");
}else{
    alert(resultado);
}
        break;
    case "2":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let c = prompt("ingrese el primer valor"); //String
        let d = prompt("ingrese el segundo valor"); //String
        let resultadoResta = +c - +d;
if(isNaN(resultadoResta)){
    alert("algunos de los valores ingresados no son numeros.");
}else{
    alert(resultadoResta);
}
       
        break;
    default:
        alert("ingrese los valores indicados pedazo de salame");
        break;
};

alert("continua por aca");

