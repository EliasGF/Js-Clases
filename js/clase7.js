//Introducciòn a funciones - Tipos de funciones

//funciones
//hard codeado -> codigo duro

/*let a = +prompt("ingrese el primer valor");
  let b = +prompt("ingrese el segundo valor");

const res = suma(a, b);
console.log(res)

//el nombre de la funcion sirve para invocarla 
function suma (a,b){
    const resultado = a + b;
    return resultado;
}*/


alert("Bienvenido a nuestra calculadora")


let salir = false;

// El signo ! sirve para que sea el opuesto de false
// el signo  \n es para saltear, como el br de html

while (!salir) {

    let respuestaUsuario = prompt(`ingrese la operación \n 
    1- suma.\n
    2- resta \n
    3- division \n
    4- multiplicacion \n
    5- salir`);

    switch (respuestaUsuario) {
        case "1":
            alert(`el resultado de la suma es ${suma()}`);
            break;
        case "2":
            alert(`el resultado de la resta es ${resta()}`);
            break;
        case "3":
            alert(`el resultado de la division es ${division()}`);
            break;
        case "4":
            alert(`el resultado de la multiplicación es ${multiplicacion()}`);
            break;

        default:
            salir = true;
            break;
    }
    //toUpperCase es para no preocuparme por las mayusculas o minusculas
    if (salir === false) {
        let respuestaSalir = prompt("¿Desea realizar otra operación? y/n.");

        if (respuestaSalir.toUpperCase() === "N") {
            salir = true;
        }
    }
}

function Question() {
    let a = +prompt("ingrese el valor");
    let b = +prompt("ingrese el segundo valor");

    return [a, b];
}

function suma() {
    const resultado = Question();
    return resultado[0] + resultado[1];
}

function resta() {
    const resultado = Question();
    return resultado[0] - resultado[1];
}

function division(){
    const resultado = Question();
    return resultado[0] / resultado[1];
}

function multiplicacion(){
    const resultado = Question();
    return resultado[0] * resultado[1];
}