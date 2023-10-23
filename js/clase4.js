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

/*
const operacion = prompt("ingrese la operaciòn: (+)-(-)-(/)-(*)");

const primerMensaje = "ingrese el primer valor";
const segundoMensaje = "ingrese el segundo valor";
const mensajeResultado = "no se puede :(";


switch (operacion) {
//if
    case "+":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let a = prompt(primerMensaje ); //String
        let b = prompt(segundoMensaje); //String
        let resultado = +a + +b;
        if (isNaN(resultado)) {
            alert(mensajeResultado);
        } else {
            alert(resultado);
        }
        break;
    case "-":
        //Acá deberiamos solicitar al usuario los 2 numeros y operar con ellos
        let c = prompt(primerMensaje); //String
        let d = prompt(segundoMensaje); //String
        let resultadoResta = +c - +d;
        if (isNaN(resultadoResta)) {
            alert(mensajeResultado);
        } else {
            alert(resultadoResta);
        }
        break;
        //else if
    case "/": //division
    let e = prompt(primerMensaje);
    let f = prompt(segundoMensaje);
    let resultado_Division = +e / +f;
    if (isNaN(resultado_Division)){
        alert(mensajeResultado);
    }else{
        alert(resultado_Division);
    }
        break;
    case "*": //multiplicaciòn
    let g = prompt(primerMensaje);
    let h = prompt(segundoMensaje);
    let resultado_Multiplicacion = +g * +h;
    if (isNaN(resultado_Multiplicacion)){
        alert(mensajeResultado);
    }else{
        alert(resultado_Multiplicacion);
    }
        break;
        //else
    default:
        alert("ingrese los valores indicados pedazo de salame");
        break;
};

alert("continua por aca");
*/

//el if-else conviene cuando tienen opciones de pocos valores y si no conviene usar switch


/*TAREA CLASE: CONSIGNA
Realizar un programa en javascript que solicite al usuario ingresar su puesto ej:
“administrador”, “gerente de ventas”, “gerente”, etc (puede ser cualquier puesto laboral deseado por ustedes).
Una vez ingresado el puesto laboral, el usuario deberá ingresar el sueldo percibido.
Deberemos elegir el bono que cobrará cada uno de los empleados y en caso de que la sumatoria de sueldo + bono sea mayor a 
770000 deberemos extraer un 25% del total del sueldo (simulando imp a ganancias).*/


//Empresa de Muebles: Jefe, Carpintero, Pintor, Fletero
const Empresa = prompt("Ingrese su cargo: Jefe, Carpintero, Pintor, Fletero");
//el bono de jefe es: 400000, carpintero 100000, pintor 50000, fletero 20000
const sueldo = ("Su sueldo es de 420000$");
const bono = ("su bono es de 450000$");
const impuesto = 770000;


switch (Empresa) {
    case "Jefe":
        let a = prompt(sueldo);
        let b = prompt(bono);
        let resultado = +a + +b;
        let resultado_Impuesto = resultado - 217500;
        
        if (resultado>= impuesto) {
            alert("Su sueldo final es de: " + resultado_Impuesto + "$");
    
        } else {
            alert("Su sueldo final es de: " + resultado + "$");
         
        }

        break;
    default:
        alert("Ingrese su cargo salchicha :D")
}

alert("Vuelva Pronto :) ");


